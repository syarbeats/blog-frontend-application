import React from 'react';
import Dropdown from '../../component/dropdownmenu/CategoryDropdown';
import EditorComponent from "./Editor";

class Main extends React.Component{

    render() {
        return(
            <div className="card">
                <div className="card-header">
                    CREATE BLOG
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-1">
                            Title:
                        </div>
                        <div className="col-md-7" style={{marginLeft:'0px'}}>
                            <input type="text" name="title" id="id" placeholder="Please insert the blog title..." size="50"/>
                        </div>
                        <div className="col-md-4" style={{marginLeft:'0px'}}>
                        </div>
                    </div>
                    <div className="row" style={{marginTop:'20px'}}>
                        <div className="col-md-1">
                            Category:
                        </div>
                        <div className="col-md-7" style={{marginLeft:'0px'}}>
                            <Dropdown/>
                        </div>
                        <div className="col-md-4" style={{marginLeft:'0px'}}>
                        </div>
                    </div>
                    <div className="row" style={{marginTop:'20px'}}>
                        <div className="col-md-1">
                            Blog:
                        </div>
                        <div className="col-md-7" style={{marginLeft:'0px'}}>
                            <EditorComponent/>
                        </div>
                        <div className="col-md-4" style={{marginLeft:'0px'}}>
                        </div>
                    </div>
                    <div className="row" style={{marginTop:'20px'}}>
                        <div className="col-md-1">
                        </div>
                        <div className="col-md-7" style={{marginLeft:'0px'}}>
                            <button className="btn btn btn-primary">Submit</button>
                        </div>
                        <div className="col-md-4" style={{marginLeft:'0px'}}>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
