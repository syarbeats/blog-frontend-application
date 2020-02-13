import React from 'react';
import Todo from "./Todo";
import InProgress from "./InProgress";
import Done from "./Done";
import queryString from "query-string";
import ProxyServices from "../../Service/ProxyServices";

class BlogApproval extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            id : 0,
            todo: [],
            inprogress: []
        }
    }


    componentDidMount() {

        let params = queryString.parse(this.props.location.search);
        console.log("PARAMS:",params.id);
        console.log("PARAMS:",params.status);
        console.log("Update STATUS...", params.id, params.status )

        if(params.id){
            ProxyServices.updateProgressStatus(params.id, params.status)
                .then(response => response.data)
                .then((json) => {
                    console.log("Response:", JSON.stringify(json));
                    this.setState({blogs: json});
                    console.log("BLOGS:", (this.state.blogs));
                }).catch(() => {
            })
        }

        ProxyServices.getAllApprovalData('To Do')
            .then(response => response.data)
            .then((json) => {
                console.log("Response:", JSON.stringify(json));
                this.setState({todo: json});
                console.log("Approval Data:", (this.state.todo));
            }).catch(() => {
        })

        ProxyServices.getAllApprovalData('In Progress')
            .then(response => response.data)
            .then((json) => {
                console.log("Response:", JSON.stringify(json));
                this.setState({inprogress: json});
                console.log("Approval Data:", (this.state.inprogress));
            }).catch(() => {
        })
    }

    render() {
        return(
            <div>
                <div className="row" style={{marginTop:'20px', marginLeft: '10px', marginRight: '15px'}}>
                    <div className="col-md-4  btn-primary">
                        <div className="card-header"><center><b>TO DO</b></center></div>
                    </div>
                    <div className="col-md-4 btn-secondary">
                        <div className="card-header"><center><b>IN PROGRESS</b></center></div>
                    </div>
                    <div className="col-md-4 btn-info">
                        <div className="card-header"><center><b>DONE</b></center></div>
                    </div>
                </div>
                <div className="row" style={{marginTop:'20px', marginLeft: '10px', marginRight: '10px'}}>
                    <div className="col-md-4">
                        <Todo todo={this.state.todo}/>
                    </div>
                    <div className="col-md-4">
                        <InProgress inprogress={this.state.inprogress}/>
                    </div>
                    <div className="col-md-4">
                        <Done/>
                    </div>
                </div>
            </div>


        );
    }
}

export default BlogApproval;

