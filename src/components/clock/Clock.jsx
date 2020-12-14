import React, {useState} from "react";
import css from './Clock.module.css';

function Clock(props) {

    let time = new Date().toLocaleTimeString();
    let date = new Date().toDateString();
    let text = 'Current time and date:';

    const [currentTime, setCurrentTime] = useState(time);

    const timeUpdate = () => {
        time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    };

    const returnJSX = <div className={css.wrapper}>
        <h3>{text}</h3>
        <h1>{time}</h1>
        <h2>{date}</h2>
    </div>

    setInterval(timeUpdate, 1000);

    if (props.bgc === 'red') {
        return <div className={css.red}>
            {returnJSX}
        </div>
    }
    if (props.bgc === 'orange') {
        return <div className={css.orange}>
            {returnJSX}
        </div>
    }
    if (props.bgc === 'yellow') {
        return <div className={css.yellow}>
            {returnJSX}
        </div>
    }
    if (props.bgc === 'green') {
        return <div className={css.green}>
            {returnJSX}
        </div>
    }
    if (props.bgc === 'dodgerblue') {
        return <div className={css.dodgerblue}>
            {returnJSX}
        </div>
    }
    if (props.bgc === 'blue') {
        return <div className={css.blue}>
            {returnJSX}
        </div>
    }
    if (props.bgc === 'purple') {
        return <div className={css.dodgerblue}>
            {returnJSX}
        </div>
    }
    if (props.bgc === 'black') {
        return <div className={css.black}>
            {returnJSX}
        </div>
    }
    if (props.bgc === 'white') {
        return <div className={css.dodgerblue}>
            {returnJSX}
        </div>
    }
    if (props.bgc === 'grey') {
        return <div className={css.grey}>
            {returnJSX}
        </div>
    }
}

export default Clock;
