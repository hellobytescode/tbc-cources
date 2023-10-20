import { useEffect, useState } from "react";

const useOTPTimer = (initialTime: number, interval = 1000) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (time <= 0) return;

    const timerId = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, interval);

    return () => clearInterval(timerId);
  }, [time, interval]);

  const resetTimer = () => {
    setTime(initialTime);
  };

  return { time, resetTimer };
};
export default useOTPTimer;
