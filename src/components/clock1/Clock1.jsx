import React, {useState} from "react";
import css from './Clock1.module.css';

function Clock1() {

    let time = new Date().toLocaleTimeString();
    let date = new Date().toDateString();
    let text = 'Current time and date:';

    const [currentTime, setCurrentTime] = useState(time);

    const timeUpdate = () => {
        time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    };

    setInterval(timeUpdate, 1000);

    return  <div className={css.wrapper}>
        <h3>{text}</h3>
        <h1>{time}</h1>
        <h2>{date}</h2>
    </div>
}

export default Clock1;
