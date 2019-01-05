import React, { Component } from "react";
import WorkflowLoadGraph from "./workflow_load_graph/WorkflowLoadGraph";
import WorkflowLoadGraph2 from "./workflow_load_graph/WorkflowLoadGraph2";
import TaskLoadGraph from "./TaskLoadGraph";
import Menu, {SubMenu, MenuItem} from 'rc-menu';
import {MdMenu} from 'react-icons/md'
import './menu/menu.css'

import 'rc-menu/assets/index.css';


class Main extends Component {
    state = {
        openKeys: [],
        // menu: ['/wfGraph','/taskGraph','/other']
    };

    onClick(info) {
        console.log('click ', info);
    }

    onOpenChange = (openKeys) => {
        console.log('onOpenChange', openKeys);
        this.setState({
            openKeys,
        });
    }

    render() {
        return <div><div>
            <button className='menu-button-style' onClick={this.handleClick}>
                <MdMenu/>
            </button>
        </div>
            <div style={{ width: "30vw" , height: "100vh"}}>
                <Menu
                    onClick={this.onClick}
                    mode="inline"
                    onOpenChange={this.onOpenChange}
                    openKeys={this.state.openKeys}

                >
                    <SubMenu key="1" title="submenu1">
                        <MenuItem key="1-1">item1-1</MenuItem>
                        <MenuItem key="1-2">item1-2</MenuItem>
                    </SubMenu>
                    <SubMenu key="2" title="submenu2">
                        <MenuItem key="2-1">item2-1</MenuItem>
                        <MenuItem key="2-2">item2-2</MenuItem>
                    </SubMenu>
                    <MenuItem key="3">item3</MenuItem>
                </Menu>
            </div>

        </div>;
    }
}

export default Main;