import React from "react";
// countup
import CountUp from "react-countup";
const CountUpNumber = ({ inView, start, end, duration, text1, text2 }) => {
  return (
    <div>
      <div className="text-[40px] font-tertiary text-gradient mb-2">
        {inView ? (
          <CountUp start={start} end={end} duration={duration} />
        ) : null}
      </div>
      <div className="font-primary text-sm tracking-[2px]">
        {text1}
        <br />
        {text2}
      </div>
    </div>
  );
};

export default CountUpNumber;
