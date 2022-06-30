import React from "react";
import DateTimeDisplay from "./DateTimeDisplay.jsx";

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-couter">
      <br />
      <DateTimeDisplay value={days} type={"Dias"} /> <br />
      <DateTimeDisplay value={hours} type={"Horas"}  /> <br />
      <DateTimeDisplay value={minutes} type={"Minutos"}  />
      <br />
      <DateTimeDisplay value={seconds} type={"segundos"} />
    </div>
  );
};

export default ShowCounter;
