import { useEffect, useState } from "react";

const useTokenGenerator = (intervalTime) => {
  const [generatedToken, setGeneratedToken] = useState("");

  useEffect(() => {
    const getGeneratedTime = () => {
      const currentTimestamp = Math.floor(new Date().getTime() / 1000);
      const multipliedTimestamp = currentTimestamp * 247;
      const randomSixDigitNumber = Math.floor(100000 + Math.random() * 900000);
      const finalToken = `${randomSixDigitNumber}${multipliedTimestamp}`;
      setGeneratedToken(finalToken);
    };

    getGeneratedTime();

    if (intervalTime) {
      const intervalId = setInterval(getGeneratedTime, intervalTime);
      return () => clearInterval(intervalId);
    }
  }, [intervalTime]);

  return generatedToken;
};

export default useTokenGenerator;
