import { useEffect, useState } from 'react';



const getReturnValues = (countDown) =>  {
    
    //calculando o tempo restante
    const days = Math.floor(countDown/ (1000 * 60 * 60 * 24)); // 86.400 segundos 1 dia
    const hours = Math.floor(countDown % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)); // 1 dia dividido por 3600 segundo (1h)
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60)) //  1h dividido por 1 min (60 mil segundos)
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);  // 1 min dividido por 1 s (1000 milesegundos)
 



    return [days, hours, minutes, seconds];
}

const useCountdown = (targetDate) => {
    const countDownDate = new Date(targetDate).getTime(); 


const [countDown, setCountDown] = useState(countDownDate - new Date().getTime()
); 

useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime()); 
      // setInterval chama uma função em um intervalo específico de tempo.       
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};


export {useCountdown}