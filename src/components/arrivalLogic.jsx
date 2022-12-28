import { useEffect } from "react";
import { useState } from "react";
const [counter, setCounter] = useState(0);
useEffect(() => {
  let interval;

  const updateCounter = () => {
    setCounter((currentValue) => currentValue + 1);
  };

  interval = setInterval(() => {
    updateCounter();
  }, 1000);

  return () => {
    // Clear the interval when component is unmounted
    clearInterval(interval);
  };
}, []);
