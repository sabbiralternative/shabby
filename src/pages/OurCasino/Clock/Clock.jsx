// import $ from "jquery";
// import { useEffect, useState } from "react";

import { useEffect, useState } from "react";

const Clock = ({ data }) => {
  const [zeroIndex, setZeroIndex] = useState(0);
  const [oneIndex, setOneIndex] = useState(0);
  useEffect(() => {
    if (data && data[0] && (data[0]?.timer || data[0]?.timer === 0) ) {
      const timer = data[0]?.timer?.toString();
     if(timer.length === 1){
       const secondIndex = timer?.substring(0,1)
       setOneIndex(secondIndex)
       setZeroIndex(0)
     }else{
       const firstIndex = timer?.substring(0,1)
       setZeroIndex( firstIndex)
       const secondIndex = timer?.substring(1)
       setOneIndex(secondIndex)
     }
    }
  }, [data]);


  // const playInterval = 1000;
  // const minuteInterval = 10000;

  // useEffect(() => {
  //   const secondInterval = setInterval(() => {
  //     secondPlay();
  //   }, playInterval);

  //   const minuteIntervalId = setInterval(() => {
  //     minutePlay();
  //   }, minuteInterval);

  //   return () => {
  //     clearInterval(secondInterval);
  //     clearInterval(minuteIntervalId);
  //   };
  // }, []); // Empty dependency array ensures the effect runs only once

  // const secondPlay = () => {
  //   setMinutePlayIndex(0); // Reset minute play index
  //   setSecondPlayIndex((prevIndex) => {
  //     const newIndex = (prevIndex + 1) % $(".flip.play li").length;

  //     $(".flip.play li").removeClass("flip-clock-before");

  //     const aa = $(".flip.play li").eq(newIndex);

  //     if (aa.html() === undefined) {
  //       aa.addClass("flip-clock-before").removeClass("flip-clock-active");
  //       $(".flip.play li").eq(0).addClass("flip-clock-active");
  //     } else if (aa.is(":last-child")) {
  //       aa.addClass("flip-clock-before").removeClass("flip-clock-active");
  //       $(".flip.play li").eq(0).addClass("flip-clock-active");
  //     } else {
  //       aa.addClass("flip-clock-before")
  //         .removeClass("flip-clock-active")
  //         .next("li")
  //         .addClass("flip-clock-active");
  //     }

  //     return newIndex;
  //   });
  // };

  // const minutePlay = () => {
  //   setSecondPlayIndex(0); // Reset second play index
  //   setMinutePlayIndex((prevIndex) => {
  //     const newIndex = (prevIndex + 1) % $(".flip.play li").length;

  //     $(".flip.play li").removeClass("flip-clock-before");

  //     const aa = $(".flip.play li").eq(newIndex);

  //     if (aa.html() === undefined) {
  //       aa.addClass("flip-clock-before").removeClass("flip-clock-active");
  //       $(".flip.play li").eq(0).addClass("flip-clock-active");
  //     } else if (aa.is(":last-child")) {
  //       aa.addClass("flip-clock-before").removeClass("flip-clock-active");
  //       $(".flip.play li").eq(0).addClass("flip-clock-active");
  //     } else {
  //       aa.addClass("flip-clock-before")
  //         .removeClass("flip-clock-active")
  //         .next("li")
  //         .addClass("flip-clock-active");
  //     }

  //     return newIndex;
  //   });
  // };
  // console.log(secondPlayIndex);

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
          <li className="flip-clock-active">
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
          <li className="flip-clock-active">
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
undefined;
