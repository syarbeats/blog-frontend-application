import React from 'react';
import LeftMenu from "./LeftMenu";
import Main from "./Main";

class CreateBlog extends React.Component{

    render() {
        return(
            <div style={{marginTop:'100px'}}>
                <div className="row" style={{marginLeft:'20px', marginRight:'20px'}}>
                    <div className="col-md-12">

                    </div>
                </div>
                <div className="row" style={{marginLeft:'20px', marginRight:'20px'}}>
                    <div className="col-md-3">
                        <LeftMenu/>
                    </div>
                    <div className="col-md-9">
                        <Main/>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateBlog;
