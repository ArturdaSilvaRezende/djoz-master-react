import { useEffect, useRef, useState } from "react";
import * as C from "./style";

export const Countdown = () => {
  const countDownDate = new Date("Dec 15, 2022 23:59:59").getTime();
  const countDownTimeRef = useRef<HTMLDivElement | null>(null);
  const [days, setDays] = useState<number>();
  const [hours, setHours] = useState<number>();
  const [minutes, setMinutes] = useState<number>();
  const [seconds, setSeconds] = useState<number>();

  useEffect(() => {
    const interval = setInterval(() => {
      // const now = new Date().getTime();

      const distance = countDownDate - 2025;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      setDays(days);

      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(hours);

      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(minutes);

      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setSeconds(seconds);

      if (distance < 0 && countDownTimeRef.current) {
        countDownTimeRef.current.innerHTML = "EXPIRED";
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return (
    <C.Countdown className="countdown">
      <C.CountdownContainer>
        <hgroup>
          <h1>Tomorrowland 2025</h1>
          <h3>Music Festival Start In</h3>
        </hgroup>
        <div className="countdown__time" ref={countDownTimeRef}>
          <p>
            <span>
              {(days as number) >= 100 ? days : ("0" + days).slice(-2)}
            </span>
            <span>Days</span>
          </p>
          <p>
            <span>{("0" + hours).slice(-2)}</span>
            <span>Hours</span>
          </p>
          <p>
            <span>{("0" + minutes).slice(-2)}</span>
            <span>Minutes</span>
          </p>
          <p>
            <span>{("0" + seconds).slice(-2)}</span>
            <span>Seconds</span>
          </p>
        </div>
        <button>Buy Tickets</button>
      </C.CountdownContainer>
    </C.Countdown>
  );
};
