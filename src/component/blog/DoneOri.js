import React, {Component} from 'react';

class DoneOri extends Component{

    constructor(props) {
        super(props);
        this.state ={

        }
    }

    render() {
        return (
            <div>

                <div className="card">
                    <div className="card-header bg-info text-white">BLOG Title</div>
                    <div className="card-body">
                        <p>In the reactive style of programming, we make a request for the resource
                            and start performing other things. When the data is available,
                            we get the notification along with data in the form of call back function.
                            In the callback function, we handle the response as per application/user needs.<a href="">Read More..</a></p>
                            <div className="col-md-12 btn-info">
                                <center><label className="btn-info"><b>APPROVED</b></label></center>
                            </div>
                    </div>
                </div>
                <hr/>
                <div className="card">
                    <div className="card-header bg-info text-white">BLOG Title</div>
                    <div className="card-body">
                        <p>In the reactive style of programming, we make a request for the resource
                            and start performing other things. When the data is available,
                            we get the notification along with data in the form of call back function.
                            In the callback function, we handle the response as per application/user needs.<a href="">Read More..</a></p>

                        <div className="col-md-12 btn-warning">
                            <center><label className="btn-warning"><b>REJECTED</b></label></center>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default DoneOri;
