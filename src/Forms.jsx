import React, { useState } from "react";
import CountdownTimer from "./components/CountdownTimer";
import styles from "./forms.module.css";

const Forms = () => {
  const Days = 1 * 24 * 60 * 60 * 1000;
  const Now = new Date().getTime();

  const dateAfterOneDay = Now + Days;
  const [targetDate, setTargetDate] = useState(new Date(dateAfterOneDay));

  const handleChange = (event) => {
    event.preventDefault();
    if (event.target.value) {
      setTargetDate(new Date(event.target.value)); // new Date vai ler o valor passado e reproduzir o formato atribuido a ele em data.
    } else {
      setTargetDate(new Date(dateAfterOneDay));
    }
  };

  return (
    <div>
      <center>
        <h1>Selecione um data futura para saber quanto tempo falta:</h1>

        <input type="date" id="date" onChange={handleChange}></input>

        <div className={styles.counter}>
          <CountdownTimer targetDate={targetDate} />
        </div>
      </center>
    </div>
  );
};

export default Forms;
