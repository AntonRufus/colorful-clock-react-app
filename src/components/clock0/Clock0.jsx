import React, {useState} from "react";
import moment from "moment";
import css from './Clock0.module.css';

function Clock0(props) {

    let time = new Date().toLocaleTimeString();
    // let date = new Date().toDateString();
    // let text = 'Current time and date:';

    const [currentTime, setCurrentTime] = useState(time);

    const timeUpdate = () => {
        time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    };

    setInterval(timeUpdate, 1000);

    return <div className={css.wrapper}>
            {time}
        <p>
            {props.date0 ? moment().format('MMMM Do YYYY') : ''}
        </p>
    </div>
}

export default Clock0;
