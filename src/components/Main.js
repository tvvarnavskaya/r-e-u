import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import WorkflowLoadGraph from "./WorkflowLoadGraph";
import TaskLoadGraph from "./TaskLoadGraph";
import Contact from "./Contact";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <ul className="header">
                        <li><NavLink exact to="/">Граф загрузки потоков задач</NavLink></li>
                        <li><NavLink to="/stuff">Граф загрузки задач</NavLink></li>
                        <li><NavLink to="/contact">В разработке</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route path="/" component={WorkflowLoadGraph}/>
                        <Route path="/stuff" component={TaskLoadGraph}/>
                        {/*<Route path="/contact" component={Contact}/>*/}
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;