import prisma from '../../db/prisma';
import { z } from 'zod';
import bcrypt from 'bcryptjs';

const registerUserSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(5, 'Password should be minimum 5 characters'),
});

const registerUser = async (name, email, userPassword) => {
  const {email: username, password} = registerUserSchema.parse({email: email, password: userPassword});
  const user = await prisma.user.findUnique({
    where: { email: username },
  });

  if (user !== null) {
    console.log("User already exist")
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await prisma.user.create({
    data: {
      name: name,
      email: username,
      password: hashedPassword,
    },
  });
  return newUser.email
};


export const userService = {
  registerUser
}
