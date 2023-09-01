import React, { Component } from 'react';
import AirVent from '../img/ico.png';
import stuels from './mportance.css';
import { ChevronDown, Power, PowerOff } from 'lucide-react';

let timer = null

let color = {
    color: '#B22222'
}

export default class Importance extends Component {
    constructor(props) {
        super(props);

        this.state = {
            timer: null,
            cheek: 0,
            buttons: <PowerOff size={48} strokeWidth={2.5} style={color} />,
            text: 'OFF',
            click: 0,
            textClick: null,
            DivClick: null,
        };
        this.onClick = this.onClick.bind(this);
        this.Click = this.Click.bind(this);
        this.Click15 = this.Click15.bind(this);
        this.Click5 = this.Click5.bind(this);
        this.Click2 = this.Click2.bind(this);
    }

    onClick() {
        this.setState({
            cheek: this.state.cheek + 1,
        });
    }

    componentDidUpdate(prevProps, prevState, event) {
        if (prevState.cheek % 2 === 0 && this.state.cheek % 2 !== 0) {
            this.setState({
                timer: (
                    <div className="retractable">
                        <div className="blocks">
                            <div className="block">
                                <p className="block-text" id="15" onClick={this.Click15} >15 часа</p>
                            </div>
                            <div className="block">
                                <p className="block-text" id="5" onClick={this.Click5} >5 часа</p>
                            </div>
                            <div className="block">
                                <p className="block-text" id="2" onClick={this.Click2} >2 часа</p>
                            </div>
                        </div>
                    </div>
                ),
            });
        };

        if (prevState.cheek % 2 !== 0 && this.state.cheek % 2 === 0) {
            this.setState({ timer: null });
        };



    }
    Click15(event) {
        this.setState({
            textClick: "15 часов",

        })
        this.ClickTimer(event);
    }
    Click5(event) {
        this.setState({
            textClick: "5 часов",
        })
        this.ClickTimer(event);
    }
    Click2(event) {
        this.setState({
            textClick: "2 часа",
        })
        this.ClickTimer(event);
    }

    ClickTimer(event) {
        if (event.target.id === "15" || event.target.id === "5" || event.target.id === "2") {
            this.setState({
                DivClick: <div className="your-time">
                    <p>время выёдет через : {this.state.textClick}</p>
                </div>,
                buttons: <Power size={48} strokeWidth={2.5} style={color} />,
                text: 'ON',

            })
            color = {
                color: "#15ff00",
            }
            if (event.target.id === "15") {
                timer = 15 * 60 * 60;
                const interval = setInterval(function () {


                    if (timer > 0) {

                        timer -= 1;
                        console.log(timer)
                    } else {
                        this.setState({
                            buttons: <PowerOff size={48} strokeWidth={2.5} style={color} />,
                            text: 'OFF',
                            DivClick: null,
                            DivClick: null,
                        })
                        color = {
                            color: "#B22222",
                        }
                        console.log("Время истекло!");
                        clearInterval(interval);
                    }
                }, 1000);
                if (event.target.id === "5") {
                    timer = 5 * 60 * 60;
                    const interval = setInterval(function () {


                        if (timer > 0) {

                            timer -= 1;
                            console.log(timer)
                        } else {
                            this.setState({
                                buttons: <PowerOff size={48} strokeWidth={2.5} style={color} />,
                                text: 'OFF',
                                DivClick: null,
                                DivClick: null,
                            })
                            color = {
                                color: "#B22222",
                            }
                            console.log("Время истекло!");
                            clearInterval(interval);
                        }
                    }, 1000);
                    if (event.target.id === "2") {
                        timer = 2 * 60 * 60;
                        const interval = setInterval(function () {


                            if (timer > 0) {

                                timer -= 1;
                                console.log(timer)
                            } else {
                                this.setState({
                                    buttons: <PowerOff size={48} strokeWidth={2.5} style={color} />,
                                    text: 'OFF',
                                    DivClick: null,
                                    DivClick: null,
                                })
                                color = {
                                    color: "#B22222",
                                }
                                console.log("Время истекло!");
                                clearInterval(interval);
                            }
                        }, 1000);
                    }
                }
            }
        }
    }

    Click() {
        this.setState({
            click: this.state.click + 1,
        })
        if (this.state.click % 2 !== 0) {
            this.setState({
                buttons: <Power size={48} strokeWidth={2.5} style={color} />,
                text: 'ON',
            })
            color = {
                color: "#15ff00",
            }
            console.log(this.state.click)
        }
        else {
            this.setState({
                buttons: <PowerOff size={48} strokeWidth={2.5} style={color} />,
                text: 'OFF',
                DivClick: null,
                
            })
            color = {
                color: "#B22222",
            }
        }
    }
    On() {
        console.log(2 + 2)
    }

    render() {
        this.On();
        return (
            <div className="oval2" style={stuels}>
                <div className="centre">
                    <img src={AirVent} className="img" />
                </div>
                <div className="time">
                    <div className="text">
                        <p>
                            Время:
                        </p>
                    </div>
                    <div className="input" onClick={this.onClick}>
                        <div className="input-text">
                            <ChevronDown strokeWidth={1.25} />
                        </div>
                        {this.state.timer}
                    </div>
                </div>
                {this.state.DivClick}
                <div className="button">
                    <button className='on' onClick={this.Click} >
                        {this.state.buttons}
                    </button>
                    <div className="text-button" style={color}>
                        {this.state.text}
                    </div>
                </div>
            </div>
        );
    }
}