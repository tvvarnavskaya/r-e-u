import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {ListItemIcon, ListItemText, Divider, MenuList, MenuItem, Drawer, List, ListItem} from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Menu from '@material-ui/icons/Menu';
import IconButton from "@material-ui/core/IconButton/IconButton";
import WorkflowLoadGraph from "./workflow_load_graph/WorkflowLoadGraph";
// import routes from "./Routes"



const styles = {
    list: {
        width: 250,
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
        // activeRoute: this.activeRoute.bind(this),
        // menuNav: {routes}
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    // activeRoute(routeName) {
    //     return this.props.location.pathname.indexOf(routeName) > -1 ? true : false;
    // }

    render() {
        const { classes } = this.props;
        const { open } = this.state;

        const sideList = (
            <div className={classes.list}>
                <List>
                    {['Мониторинг воркфлоу', 'Мониторинг задач', 'В разработке'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>

            {/*    <MenuList>
                    {routes.map((prop, key) => {
                        return (
                            <Link to={prop.path} style={{ textDecoration: 'none' }} key={key}>
                                <MenuItem selected={this.activeRoute(prop.path)}>
                                    <ListItemIcon>
                                        <prop.icon />
                                    </ListItemIcon>
                                    <ListItemText primary={prop.sidebarName} />
                                </MenuItem>
                            </Link>
                        );
                    })}
                </MenuList>*/}
            </div>
        );

        return (
            <div>
                <Button onClick={this.handleDrawerOpen}><Menu/></Button>
                <Drawer open={open} /*style={{backgroundColor: 'mediumslateblue'}}*/>
                    <div className={classes.drawerHeader} style = {{backgroundColor: 'mediumpurple'}}>
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.handleDrawerOpen}
                        onKeyDown={this.handleDrawerOpen}
                        style = {{backgroundColor: 'mediumpurple'}}
                    >
                        {sideList}
                    </div>
                </Drawer>
                <WorkflowLoadGraph/>
                {/*<div id="pageContent"></div>*/}
                {/*<main className={this.props.classes.content}>
                    <Route path="/wfGraph" component={WorkflowLoadGraph}/>
                </main>*/}
            </div>
        );
    }
}

Main.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);