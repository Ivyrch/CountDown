import React, { useState } from "react";
import CountdownTimer from './components/CountdownTimer';
import styles from './forms.module.css';

const Forms = () => {
  
     const[date, setDate] = useState();
                 console.log(date) 

    const onSubmit = (e) => {
        e.preventDefaut();
      
    }
  const DAYS_IN_MS = 20 * 24 * 60 * 60 * 1000; //exemplo de calculo de 20 dias
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + DAYS_IN_MS;

  return (
    <div>
        <center >
      <h1>Selecione a data do futuro escolhida:</h1>
     
      <form onSubmit={onSubmit} >
        <input type="date" id="date" onChange={e => setDate(e.target.value)}></input>
        
        <button type="submit" >enviar data</button>
       
      </form>
      
      < div  className={styles.counter}> 
      <CountdownTimer targetDate={dateTimeAfterThreeDays} />
      </div>
      </center>
    </div>
  );
};

export default Forms; 