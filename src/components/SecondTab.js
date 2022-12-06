import React, { useState } from "react";
// import { TextField } from "@mui/material";
import "./SecondTab.css";

const SecondTab = () => {
  const [data, setData] = useState("2");
  const changeHandler = (e) => {
    setData(parseInt(e.target.value));
  };
  return (
    <div className="bg-container pl-3 pt-3  pb-3">
      <h3>Tables</h3>
      <input
        placeholder="Enter Number"
        className=""
        onChange={changeHandler}
        type="value"
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
      />
      <div className="mt-3">
        <p className="table-bg text-center d-flex flex-column justify-content-center">{`${data} X 1 X ${
          data * 1
        }`}</p>
        <p className="table-bg text-center d-flex flex-column justify-content-center">{`${data} X 2 X ${
          data * 2
        }`}</p>
        <p className="table-bg text-center d-flex flex-column justify-content-center">{`${data} X 3 X ${
          data * 3
        }`}</p>
        <p className="table-bg text-center d-flex flex-column justify-content-center">{`${data} X 4 X ${
          data * 4
        }`}</p>
        <p className="table-bg text-center d-flex flex-column justify-content-center">{`${data} X 5 X ${
          data * 5
        }`}</p>
        <p className="table-bg text-center d-flex flex-column justify-content-center">{`${data} X 6 X ${
          data * 6
        }`}</p>
        <p className="table-bg text-center d-flex flex-column justify-content-center">{`${data} X 7 X ${
          data * 7
        }`}</p>
        <p className="table-bg text-center d-flex flex-column justify-content-center">{`${data} X 8 X ${
          data * 8
        }`}</p>
        <p className="table-bg text-center d-flex flex-column justify-content-center">{`${data} X 9 X ${
          data * 9
        }`}</p>
        <p className="table-bg text-center d-flex flex-column justify-content-center">{`${data} X 10 X ${
          data * 10
        }`}</p>
      </div>
    </div>
  );
};
export default SecondTab;
