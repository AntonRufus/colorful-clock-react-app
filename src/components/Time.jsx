import React, {Component} from "react";
import css from './Time.module.css'
import Clock from "./clock/Clock";
import Hello from "./Hello";
import "./time.css"

class Time extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clock1: false,
            clock2: false,
            clock3: false,
            clock4: false,
            clock5: false,
            clock6: false,
            clock7: false,
            clock8: false,
            clock9: false,
            clock10: false,
            color: ['red', 'orange', 'yellow', 'green', 'dodgerblue', 'blue', 'purple', 'black', 'white', 'grey',],
            clock1color: 'red',
            clock2color: 'orange',
            clock3color: 'yellow',
            clock4color: 'green',
            clock5color: 'dodgerblue',
            clock6color: 'blue',
            clock7color: 'purple',
            clock8color: 'black',
            clock9color: 'white',
            clock10color: 'grey',
        }
    }

    toggleSwitchClock1 = () => {
        this.setState({
            clock1: !this.state.clock1,
            clock2: false,
            clock3: false,
            clock4: false,
            clock5: false,
            clock6: false,
            clock7: false,
            clock8: false,
            clock9: false,
            clock10: false,
        })
    };

    toggleSwitchClock2 = () => {
        this.setState({
            clock1: false,
            clock2: !this.state.clock2,
            clock3: false,
            clock4: false,
            clock5: false,
            clock6: false,
            clock7: false,
            clock8: false,
            clock9: false,
            clock10: false,
        })
    };

    toggleSwitchClock3 = () => {
        this.setState({
            clock1: false,
            clock2: false,
            clock3: !this.state.clock3,
            clock4: false,
            clock5: false,
            clock6: false,
            clock7: false,
            clock8: false,
            clock9: false,
            clock10: false,
        })
    };

    toggleSwitchClock4 = () => {
        this.setState({
            clock1: false,
            clock2: false,
            clock3: false,
            clock4: !this.state.clock4,
            clock5: false,
            clock6: false,
            clock7: false,
            clock8: false,
            clock9: false,
            clock10: false,
        })
    };

    toggleSwitchClock5 = () => {
        this.setState({
            clock1: false,
            clock2: false,
            clock3: false,
            clock4: false,
            clock5: !this.state.clock5,
            clock6: false,
            clock7: false,
            clock8: false,
            clock9: false,
            clock10: false,
        })
    };

    toggleSwitchClock6 = () => {
        this.setState({
            clock1: false,
            clock2: false,
            clock3: false,
            clock4: false,
            clock5: false,
            clock6: !this.state.clock6,
            clock7: false,
            clock8: false,
            clock9: false,
            clock10: false,
        })
    };

    toggleSwitchClock7 = () => {
        this.setState({
            clock1: false,
            clock2: false,
            clock3: false,
            clock4: false,
            clock5: false,
            clock6: false,
            clock7: !this.state.clock7,
            clock8: false,
            clock9: false,
            clock10: false,
        })
    };

    toggleSwitchClock8 = () => {
        this.setState({
            clock1: false,
            clock2: false,
            clock3: false,
            clock4: false,
            clock5: false,
            clock6: false,
            clock7: false,
            clock8: !this.state.clock8,
            clock9: false,
            clock10: false,
        })
    };

    toggleSwitchClock9 = () => {
        this.setState({
            clock1: false,
            clock2: false,
            clock3: false,
            clock4: false,
            clock5: false,
            clock6: false,
            clock7: false,
            clock8: false,
            clock9: !this.state.clock9,
            clock10: false,
        })
    };

    toggleSwitchClock10 = () => {
        this.setState({
            clock1: false,
            clock2: false,
            clock3: false,
            clock4: false,
            clock5: false,
            clock6: false,
            clock7: false,
            clock8: false,
            clock9: false,
            clock10: !this.state.clock10,
        })
    };

    render() {
        return (
            <div className={css.time}>
                <button style={{backgroundColor: this.state.color[0], marginRight: '22px'}} onClick={this.toggleSwitchClock1}>
                    RED
                </button>
                <button style={{backgroundColor: this.state.color[1], marginRight: '22px'}} onClick={this.toggleSwitchClock2}>
                    ORANGE
                </button>
                <button style={{backgroundColor: this.state.color[2], marginRight: '22px'}} onClick={this.toggleSwitchClock3}>
                    YELLOW
                </button>
                <button style={{backgroundColor: this.state.color[3], marginRight: '22px', color:'white'}} onClick={this.toggleSwitchClock4}>
                    GREEN
                </button>
                <button style={{backgroundColor: this.state.color[4], marginRight: '22px', color:'white'}} onClick={this.toggleSwitchClock5}>
                    LIGHT BLUE
                </button>
                <button style={{backgroundColor: this.state.color[5], marginRight: '22px', color:'white'}} onClick={this.toggleSwitchClock6}>
                    BLUE
                </button>
                <button style={{backgroundColor: this.state.color[6], marginRight: '22px', color:'white'}} onClick={this.toggleSwitchClock7}>
                    PURPLE
                </button>
                <button style={{backgroundColor: this.state.color[7], marginRight: '22px', color:'white'}} onClick={this.toggleSwitchClock8}>
                    BLACK
                </button>
                <button style={{backgroundColor: this.state.color[8], marginRight: '22px'}} onClick={this.toggleSwitchClock9}>
                    WHITE
                </button>
                <button style={{backgroundColor: this.state.color[9], marginRight: '22px', color:'white'}} onClick={this.toggleSwitchClock10}>
                    GREY
                </button>
                {!this.state.clock1 && !this.state.clock2 && !this.state.clock3 && !this.state.clock4
                && !this.state.clock5 && !this.state.clock6 && !this.state.clock7 && !this.state.clock8
                && !this.state.clock9 && !this.state.clock10 ? <Hello/> : ''}
                {this.state.clock1 ? <Clock bgc={this.state.color[0]}/> : ''}
                {this.state.clock2 ? <Clock bgc={this.state.color[1]}/> : ''}
                {this.state.clock3 ? <Clock bgc={this.state.color[2]}/> : ''}
                {this.state.clock4 ? <Clock bgc={this.state.color[3]}/> : ''}
                {this.state.clock5 ? <Clock bgc={this.state.color[4]}/> : ''}
                {this.state.clock6 ? <Clock bgc={this.state.color[5]}/> : ''}
                {this.state.clock7 ? <Clock bgc={this.state.color[6]}/> : ''}
                {this.state.clock8 ? <Clock bgc={this.state.color[7]}/> : ''}
                {this.state.clock9 ? <Clock bgc={this.state.color[8]}/> : ''}
                {this.state.clock10 ? <Clock bgc={this.state.color[9]}/> : ''}
            </div>
        );
    }
}

export default Time;
