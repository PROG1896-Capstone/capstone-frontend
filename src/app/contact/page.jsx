import Image from "next/image";
import iconEmail from "@/assets/icon-email.svg";
import iconPhone from "@/assets/icon-phone.svg";
import iconLocation from "@/assets/icon-location.svg";
import styles from "./contact.module.css";

export const Contact = () => {
  const info = [
    {
      iconSrc: iconEmail,
      iconAlt: "icon-email",
      text: "Sunsetbistro@gmail.com",
    },
    {
      iconSrc: iconPhone,
      iconAlt: "icon-phone",
      text: "+1 112 365 23654",
    },
    {
      iconSrc: iconLocation,
      iconAlt: "icon-location",
      text: "123 Victoria Street, Kitchener, N2L 3V9, Canada",
    },
  ];

  const times = [
    {
      day: "Monday",
      hours: "9:00 am - 11:00 pm",
    },
    {
      day: "Tuesday",
      hours: "9:00 am - 11:00 pm",
    },
    {
      day: "Wednesday",
      hours: "9:00 am - 11:00 pm",
    },
    {
      day: "Thursday",
      hours: "9:00 am - 11:00 pm",
    },
    {
      day: "Friday",
      hours: "9:00 am - 11:00 pm",
    },
    {
      day: "Saturday",
      hours: "9:00 am - 11:00 pm",
    },
    {
      day: "Sunday",
      hours: "9:00 am - 6:00 pm",
    },
  ];

  return (
    <div className={styles.page}>
      <div className={styles.contact}>
        <h1 className={styles.heading}>Contact Us</h1>
        <div className={styles.info_box}>
          {info.map((info) => (
            <div className={styles.info}>
              <Image
                className={styles.icon}
                src={info.iconSrc}
                alt={info.iconAlt}
              />
              <p className={styles.info_text}>{info.text}</p>
            </div>
          ))}
        </div>
        <h3 className={styles.small_heading}>Timings</h3>
        <div className={styles.times}>
          <div className={styles.days_box}>
            {times.map((time) => (
              <p className={styles.day}>{time.day}</p>
            ))}
          </div>
          <div className={styles.hours_box}>
            {times.map((time) => (
              <p className={styles.hours}>{time.hours}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
