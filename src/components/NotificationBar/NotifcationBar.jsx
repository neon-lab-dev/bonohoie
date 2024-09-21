import { useState, useEffect } from "react";
import "./NotificationBar.css";
import NotificationBarBackgroundIcons from "../../assets/images/NotifcationBarBackgroundIcons.png";

export default function NotificationBar() {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const targetDate = new Date("August 31, 2024 23:59:59");

    const updateCountdown = () => {
      const now = new Date();
      const timeDifference = targetDate - now;

      if (timeDifference <= 0) {
        setTimeLeft("Offer ended!");
        return;
      }

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );

      setTimeLeft(`${days}d : ${hours}hr : ${minutes}mins`);
    };
    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="notification-bar">
      <p className="text-xs sm:text-base">
         Free shipping until 31 August, 2024 &nbsp;&nbsp; | &nbsp;&nbsp;{" "}
        {timeLeft}
      </p>
      <img
        src={NotificationBarBackgroundIcons}
        alt="Notification bar background icons"
        className="notification-bar-background-icons"
      />
    </div>
  );
}
