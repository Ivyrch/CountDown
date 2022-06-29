import React from "react";
import DateTimeDisplay from './DateTimeDisplay.jsx';

const ShowCounter = ({days, hours, minutes, seconds}) => {
    return (
        <div className="show-couter">
            
                <DateTimeDisplay value={days} type={'Dias'} isDanger={days <= 3} /> :
                <DateTimeDisplay value={hours} type={'Horas'} isDanger={false} /> :
                <DateTimeDisplay value={minutes} type={'Minutos'} isDanger={false} /> :
                <DateTimeDisplay value={seconds} type={'segundos'} isDanger={false} />

          

        </div>
    );
}

export default ShowCounter; 