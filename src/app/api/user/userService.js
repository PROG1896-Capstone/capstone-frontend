import prisma from "../../utils/prisma";
import { z } from "zod";
import bcrypt from "bcryptjs";

const registerUserSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(5, "Password should be minimum 5 characters"),
});

export const signIn = async (userEmail, userPassword) => {
  try {
    const email = userEmail.trim();
    const password = userPassword.trim();

    // Check if email and password are not empty.
    if (email === "" || password === "")
      return { error: "Fields can not be empty!" };

    const existingUser = await prisma.user.findUnique({
      where: { email: email },
      include:{
        employee:true
      }
    });

    if (!existingUser) {
      return { error: "User doesn't exist!" };
    }

    const userCredentialsCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (userCredentialsCorrect){

      return {
        id: existingUser.id,
        name: existingUser.name,
        email: existingUser.email,
        role: existingUser.employee[0].role
      };
    
    }

    return { error: "Incorrect credentials" };
  } catch (error) {
    return error;
  }
};

const getUser = async (id) => {
  try {
    const existingUser = await prisma.user.findUnique({
      where: { id: id },
      select: {
        id: true,
        name: true,
        email: true,
        order: true,
      },
    });

    if (!existingUser) {
      return { error: "User doesn't exist!" };
    }
    return existingUser;
  } catch (error) {
    return error;
  }
};

const registerUser = async (name, email, userPassword) => {
  try {
    const { email: username, password } = registerUserSchema.parse({
      email: email,
      password: userPassword,
    });
    const user = await prisma.user.findUnique({
      where: { email: username },
    });

    if (user !== null) {
      return { error: "User already exist", data: null };
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        name: name,
        email: username,
        password: hashedPassword,
      },
    });
    return newUser.email;
  } catch (error) {
    return { error };
  }
};

export const userService = {
  registerUser,
  signIn,
  getUser,
};
