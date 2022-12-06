import React, { useState } from "react";
import "./ThirdTab.css";

const ThirdTab = () => {
  const [square, SetSquare] = useState(0);
  const [powerValue, setPowerValue] = useState(0);
  const [third, setThird] = useState(0);
  const [four, setFour] = useState(0);

  const firstHandler = (e) => {
    SetSquare(e.target.value);
  };
  const secondHandler = (e) => {
    setPowerValue(e.target.value);
  };
  const thirdHandler = (e) => {
    setThird(e.target.value);
  };
  const fourHandler = (e) => {
    setFour(e.target.value);
  };
  return (
    <div className="bg-container pt-4 pl-5 pb-5">
      <h1>Square Numbers</h1>

      <div className="d-flex flex-row">
        <input
          onChange={firstHandler}
          placeholder="Enter Number"
          type="value"
        />
        <input
          onChange={secondHandler}
          className="ml-5"
          placeholder="Enter Number"
          type="value"
        />
        <p className="ml-5 mt-0">
          {`${square} to the power ${powerValue} is ${square ** powerValue}`}{" "}
        </p>
      </div>

      <div className="d-flex flex-row mt-5">
        <input
          onChange={thirdHandler}
          type="value"
          placeholder="Enter Number"
        />
        <p className="mt-0 ml-5">{`Cube : ${third * third * third}`}</p>
      </div>

      <div className="d-flex flex-row mt-5">
        <input onChange={fourHandler} type="value" placeholder="Enter Number" />
        <p className="mt-0 ml-5">{`Square : ${four * four}`}</p>
      </div>
    </div>
  );
};
export default ThirdTab;
