import React, {Component} from "react";
import css from './Time.module.css'
import Clock1 from "./clock1/Clock1";
import Clock0 from "./clock0/Clock0";
import Hello from "./Hello";
import "./time.css"

class Time extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clock0: false,
            date0: false,
            clock1: false,
        }
    }

    toggleSwitchClock0 = () => {
        this.setState({
            clock0: !this.state.clock0,
            date0: !this.state.date0,
            clock1: false,
        })
    };


    toggleSwitchClock1 = () => {
        this.setState({
            clock0: false,
            date0: false,
            clock1: !this.state.clock1,
        })
    };

    render() {
        return (
            <div className={css.time}>
                <button onClick={this.toggleSwitchClock0}>Clock 0</button>
                <button onClick={this.toggleSwitchClock1}>Clock 1</button>
                <button onClick={this.toggleSwitchClock2}>Clock 2</button>
                <button onClick={this.toggleSwitchClock3}>Clock 3</button>
                <button onClick={this.toggleSwitchClock4}>Clock 4</button>
                <button onClick={this.toggleSwitchClock5}>Clock 5</button>
                {!this.state.clock1 && !this.state.clock0 ? <Hello/> : ''}
                {this.state.clock0 ? <Clock0 date0={this.state.date0}/> : ''}
                {this.state.clock1 ? <Clock1/> : ''}
                {/*{this.state.clock2 ? <Clock2/> : ''}*/}
                {/*{this.state.clock3 ? <Clock3/> : ''}*/}
                {/*{this.state.clock4 ? <Clock4/> : ''}*/}
                {/*{this.state.clock5 ? <Clock5/> : ''}*/}
            </div>
        );
    }
}

export default Time;
