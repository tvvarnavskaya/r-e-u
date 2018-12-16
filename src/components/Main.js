import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import WorkflowLoadGraph from "./workflow_load_graph/WorkflowLoadGraph";
import TaskLoadGraph from "./TaskLoadGraph";
// import Line from 'rc-progress/es/Line';
// import Contact from "./Contact";

class Main extends Component {

    render() {
        return (
            <HashRouter>
                <div>
                    <ul className="header">
                        <li><NavLink exact to="/wfGraph">Граф загрузки потоков задач</NavLink></li>
                        <li><NavLink to="/taskGraph">Граф загрузки задач</NavLink></li>
                        <li><NavLink to="/other">В разработке</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route path="/wfGraph" component={WorkflowLoadGraph}/>
                        <Route path="/taskGraph" component={TaskLoadGraph}/>
                        {/*<Route path="/other" component={Contact}/>*/}
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;