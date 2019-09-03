import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Blog from "../../component/blog/Blog";
import SideBar from './SideBar'

class LeftMenu extends React.Component{

    render() {
        return(
            <div className="card">
                <div className="card-header">
                    LEFT MENU
                </div>
                <div className="card-body">

                </div>
            </div>
        );
    }
}

export default LeftMenu;
