import React, {useState} from "react";
import Hello from "../Hello";
import css from './Clock.module.css';
import './ClockColors.css';

const Clock = props => {

    let text = 'Current time and date:';
    let time = new Date().toLocaleTimeString();
    let date = new Date().toDateString();

    const [ currentTime, setCurrentTime ] = useState(time);

    const timeUpdate = () => {
        time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    };

    const returnJSX =   <div className={css.wrapper}>
                            <h3>{text}</h3>
                            <h1>{time}</h1>
                            <h2>{date}</h2>
                        </div>

    setInterval(timeUpdate, 1000);

    if (props.bgc) {
            return  <div className={props.bgc}>
                        {returnJSX}
                    </div>
            } else return <Hello/>;
};

export default Clock;
