import React, { useState, useEffect } from 'react';
import './countdown.css';

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {
    const eventDate = new Date('2024-08-10T00:00:00');
    const now = new Date();
    const difference = eventDate - now;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return (
    <div className="countdown">
      <span>{timeLeft.days} Days </span>
      <span>{timeLeft.hours} Hours </span>
      <span>{timeLeft.minutes} Minutes </span>
      <span>{timeLeft.seconds} Seconds </span>
    </div>
  );
}

export default Countdown;
