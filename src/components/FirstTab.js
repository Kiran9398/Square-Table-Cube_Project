import React, { useState } from "react";
import "./FirstTab.css";

const FirstTab = () => {
  const [first, setFirst] = useState(-1);
  const [second, setSecond] = useState(1);
  const onFirstHandler = (e) => {
    setFirst(parseInt(e.target.value));
  };
  const onSecondHandler = (e) => {
    setSecond(parseInt(e.target.value));
  };
  return (
    <div className="bg-container">
      <h1>Next Number & Last Number</h1>
      <div className="d-flex flex-row ml-5 mt-5">
        <input
          placeholder="First Number"
          className=""
          onChange={onFirstHandler}
          type="value"
        />
        <p className="ml-5 pl-3 mt-0">{first + 1}</p>
      </div>

      <div className="d-flex flex-row ml-5 mt-5">
        <input
          placeholder="Second Number"
          className=""
          onChange={onSecondHandler}
          type="value"
        />
        <p className="ml-5 pl-3 mt-0">{second - 1}</p>
      </div>
    </div>
  );
};
export default FirstTab;
