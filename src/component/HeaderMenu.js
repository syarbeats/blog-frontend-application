import React from 'react';
import AuthenticationService from "../Service/ProxyServices";
import {Redirect} from "react-router-dom";
import { withRouter } from 'react-router-dom';

class HeaderMenu extends React.Component{

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav mr-auto" >
                            <li className="nav-item active">
                                <a className="nav-link" href="/">
                                    <button type="button" className="btn btn-success">Home</button><span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/blog/create">
                                    <button type="button" className="btn btn-success">Create Blog</button></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/category/create">
                                    <button type="button" className="btn btn-success">Create Blog Category</button></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/blog/approval">
                                    <button type="button" className="btn btn-success">Blog Approval</button></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/category/list">
                                    <button type="button" className="btn btn-success">Category List</button></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/user/list">
                                    <button type="button" className="btn btn-success">Show User List</button></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/admin/reporting">
                                    <button type="button" className="btn btn-success">Reporting</button></a>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item" style={{}}>
                                <a className="nav-link" href="/login">
                                    <button type="button" className="btn btn-success">Login</button></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/logout">
                                    <button type="button" className="btn btn-success">Logout</button></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/user/register">
                                    <button type="button" className="btn btn-success">Sign Up</button></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default HeaderMenu;
