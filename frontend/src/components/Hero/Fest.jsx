import React, { useState, useEffect } from 'react';
import './Fest.css';

const Fest = () => {
  const calculateTimeLeft = () => {
    const endDate = new Date("August 19, 2024 23:59:59").getTime();
    const now = new Date().getTime();
    const distance = endDate - now;

    let timeLeft = {};

    if (distance > 0) {
      timeLeft = {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fest">
    <div className="fest-banner">
      <div className="fest-content">
        <p>       Exclusive Offers, Limited Time Only!</p>
        <div className="countdown-timer">
          <span>{timeLeft.days} Days</span> : 
          <span>{timeLeft.hours} Hrs</span> : 
          <span>{timeLeft.minutes} Mins</span> : 
          <span>{timeLeft.seconds} Secs</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Fest;
