import React from "react";

const DateTimeDisplay = ({ value, type}) => {
  return (
    <div >
      <span>{value} </span>
      <span>{type} </span>
    </div>
  );
};
export default DateTimeDisplay;
