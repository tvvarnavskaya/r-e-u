import React, { Component } from "react";
import {Progress} from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

class TaskLoadGraph extends Component {
    state = {
        percent: 30,
        status: "default" //active, success, error
    }
    render() {
        return (
            <div>
                <h2>STUFF</h2>
                <p>Mauris sem velit, vehicula eget sodales vitae,
                    rhoncus eget sapien:</p>
                <ol>
                    <li>Nulla pulvinar diam</li>
                    <li>Facilisis bibendum</li>
                    <li>Vestibulum vulputate</li>
                    <li>Eget erat</li>
                    <li>Id porttitor</li>
                </ol>
                <Progress percent = {this.state.percent} status={this.state.status}/>
            </div>
        );
    }
}

export default TaskLoadGraph;