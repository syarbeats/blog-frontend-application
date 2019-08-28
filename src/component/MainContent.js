import React , { Component } from 'react';
import RightContent from "./RightContent";
import AppRouter from "../route/router";
import HeaderMenu from "./HeaderMenu";
import Header from "./Header";
import {Provider} from "react-redux";

class MainContent extends Component {
    render(){
        return (
            <div>
                <div>
                    <main style={{marginLeft:'0px' , marginRight:'0px', width:'100%'}}>
                        <div className="row">
                            <div className="col-md-12">
                                <HeaderMenu/>
                                <Header/>
                                <AppRouter/>
                            </div>
                        </div>
                    </main>
                </div>
            </div>

        );
    }
}

export default MainContent;
