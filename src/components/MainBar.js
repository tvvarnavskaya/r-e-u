import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {ListItemText, Divider, MenuList, MenuItem, Drawer} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Menu from '@material-ui/icons/Menu';
import IconButton from "@material-ui/core/IconButton/IconButton";
import WorkflowLoadGraph from "./workflow_load_graph/WorkflowLoadGraph";
import {Route, HashRouter, Link} from "react-router-dom";
import WorkflowLoadGraph2 from "./workflow_load_graph/WorkflowLoadGraph2";

const styles = {
    list: {
        width: 250,
    },
    root: {
        // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        background: 'rgba(77, 77, 77, 0.82)',
        // borderRadius: 3,
        // border: 0,
        // color: 'white',
        // height: 48,
        // padding: '0 30px',
        // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 0px',
        justifyContent: 'flex-end',
    }
};

class Main extends Component {
    state = {
        open: false,
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;
        const { open } = this.state;

        const sideList = (
            <div className={classes.list}>
                <MenuList>
                    <Link to="/wfMonitoring">
                        <MenuItem selected='wfMonitoring'>
                            <ListItemText primary={'Мониторинг воркфлоу'} />
                        </MenuItem>
                    </Link>
                    <Link to="/taskMonitoring">
                    <MenuItem selected='taskMonitoring'>
                        <ListItemText primary={'В разработке'} />
                    </MenuItem>
                    </Link>
                </MenuList>
            </div>
        );

        return (
            <div>
                <div>
                    <Button onClick={this.handleDrawerOpen} size={'small'}><Menu/></Button>
                    <span style={{color: 'white', fontWeight: 'bold'}}>Мониторинг воркфлоу</span>
                </div>
                <HashRouter>
                        <React.Fragment>
                            <Drawer open={open}>
                                <div className={classes.drawerHeader} style = {{backgroundColor: 'rgba(77, 77, 77, 0.82)'}}>
                                    <span style={{color: 'white', fontWeight: 'bold'}}>Меню</span>
                                    <IconButton onClick={this.handleDrawerClose}>
                                        <ChevronLeftIcon />
                                    </IconButton>
                                </div>
                                <Divider />
                                <div
                                    tabIndex={0}
                                    role="button"
                                    onClick={this.handleDrawerClose}
                                    onKeyDown={this.handleDrawerClose}
                                    style = {{backgroundColor: 'rgba(77, 77, 77, 0.82)'}}
                                >
                                    {sideList}
                                </div>
                            </Drawer>
                            <main>
                                <Route path="/" exact component={props => <WorkflowLoadGraph />} />
                                <Route path="/wfMonitoring" component={props => <WorkflowLoadGraph />} />
                                <Route path="/taskMonitoring" component={props => <WorkflowLoadGraph2 />} />
                            </main>
                        </React.Fragment>

                </HashRouter>
            </div>
        );
    }
}

Main.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);