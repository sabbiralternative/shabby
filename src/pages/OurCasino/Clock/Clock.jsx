import { useEffect, useState } from "react";

const Clock = ({ data }) => {
  const [zeroIndex, setZeroIndex] = useState(0);
  const [oneIndex, setOneIndex] = useState(0);
  const [isZeroIndex, setIsZeroIndex] = useState(true);
  const [isOneIndex, setIsOneIndex] = useState(true);

  useEffect(() => {
    if (data && data[0] && (data[0]?.timer || data[0]?.timer === 0)) {
      const timer = data[0]?.timer?.toString();
      if (timer.length === 1) {
        const secondIndex = timer?.substring(0, 1);
        setOneIndex(secondIndex);
        setZeroIndex(0);
      } else {
        const firstIndex = timer?.substring(0, 1);
        setZeroIndex(firstIndex);
        const secondIndex = timer?.substring(1);
        setOneIndex(secondIndex);
      }
    }
  }, [data]);


  useEffect(() => {
    setIsZeroIndex(false);

    setTimeout(() => {
      setIsZeroIndex(true);
    }, 10);
  }, [zeroIndex]);


  useEffect(() => {
    setIsOneIndex(false);
    setTimeout(() => {
      setIsOneIndex(true);
    }, 10);
  }, [oneIndex]);


  return (
    <>
      <div className="clock flip-clock-wrapper">
        <ul className="flip play">
          <li className="flip-clock-before">
            <a href="#">
              <div className="up">
                <div className="shadow"></div>
                <div className="inn">{zeroIndex}</div>
              </div>
              <div className="down">
                <div className="shadow"></div>
                <div className="inn">{zeroIndex}</div>
              </div>
            </a>
          </li>
          <li className={`${isZeroIndex ? "flip-clock-active" : ""}`}>
            <a href="#">
              <div className="up">
                <div className="shadow"></div>
                <div className="inn">{zeroIndex}</div>
              </div>
              <div className="down">
                <div className="shadow"></div>
                <div className="inn">{zeroIndex}</div>
              </div>
            </a>
          </li>
        </ul>

        <ul className="flip play">
          <li className="flip-clock-before">
            <a href="#">
              <div className="up">
                <div className="shadow"></div>
                <div className="inn">{oneIndex}</div>
              </div>
              <div className="down">
                <div className="shadow"></div>
                <div className="inn">{oneIndex}</div>
              </div>
            </a>
          </li>
          <li className={`${isOneIndex ? "flip-clock-active" : ""}`}>
            <a href="#">
              <div className="up">
                <div className="shadow"></div>
                <div className="inn">{oneIndex}</div>
              </div>
              <div className="down">
                <div className="shadow"></div>
                <div className="inn">{oneIndex}</div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Clock;
