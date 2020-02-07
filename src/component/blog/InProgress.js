import React, {Component} from 'react';
import ProxyServices from "../../Service/ProxyServices";

class InProgress extends Component{

    constructor(props) {
        super(props);
        this.state ={
            approval: []
        }
    }

    componentDidMount() {
       /* ProxyServices.getAllApprovalData('In Progress')
            .then(response => response.data)
            .then((json) => {
                console.log("Response:", JSON.stringify(json));
                this.setState({approval: json});
                console.log("Approval Data:", (this.state.approval));
            }).catch(() => {
        })*/

    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({approval: nextProps})
    }

    render() {

        let blog;

        if(this.state.approval.summary){
            blog = this.state.approval.map((data, i) => <BlogInProgress key = {i} data = {data} />)
        }else{
            blog = this.props.inprogress.map((data, i) => <BlogInProgress key = {i} data = {data} />)
        }

        return (
            <div>

                {/*<div className="card">
                    <div className="card-header bg-secondary text-white">BLOG Title</div>
                    <div className="card-body">
                        <p>In the reactive style of programming, we make a request for the resource
                            and start performing other things. When the data is available,
                            we get the notification along with data in the form of call back function.
                            In the callback function, we handle the response as per application/user needs.<a href="">Read More..</a></p>

                        <a className="btn btn-secondary" href={"/blog?title=" } role="button">Approve</a>
                        <a className="btn btn-secondary" href={"/blog?title="} style={{marginLeft: '10px'}} role="button">Reject</a>
                    </div>
                </div>
                <hr/>
                <div className="card">
                    <div className="card-header bg-secondary text-white">BLOG Title</div>
                    <div className="card-body">
                        <p>In the reactive style of programming, we make a request for the resource
                            and start performing other things. When the data is available,
                            we get the notification along with data in the form of call back function.
                            In the callback function, we handle the response as per application/user needs.<a href="">Read More..</a></p>

                        <a className="btn btn-secondary" href={"/blog?title=" } role="button">Approve</a>
                        <a className="btn btn-secondary" href={"/blog?title="} style={{marginLeft: '10px'}} role="button">Reject</a>
                    </div>
                </div>
                <hr/>
                <div className="card">
                    <div className="card-header bg-secondary text-white">BLOG Title</div>
                    <div className="card-body">
                        <p>In the reactive style of programming, we make a request for the resource
                            and start performing other things. When the data is available,
                            we get the notification along with data in the form of call back function.
                            In the callback function, we handle the response as per application/user needs.<a href="">Read More..</a></p>

                        <a className="btn btn-secondary" href={"/blog?title=" } role="button">Approve</a>
                        <a className="btn btn-secondary" href={"/blog?title="} style={{marginLeft: '10px'}} role="button">Reject</a>
                    </div>
                </div>*/}

                {/*{this.state.approval.map((data, i) => <BlogInProgress key = {i} data = {data} />)}*/}
                {/*{this.props.inprogress.map((data, i) => <BlogInProgress key = {i} data = {data} />)}*/}
                {blog}
            </div>
        );
    }

}

export default InProgress;

class BlogInProgress extends Component{

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header bg-secondary text-white">{this.props.data.title}</div>
                    <div className="card-body">
                        <p>{this.props.data.createdDate}</p>
                        <p>{this.props.data.summary}......<a href="">Read More..</a></p>

                        <a className="btn btn-secondary" href={"/blog/approval?id="+this.props.data.id+'&status=In Progress'} role="button">Approve</a>
                        <a className="btn btn-secondary" style={{marginLeft: '10px'}} href={"/blog/approval?id="+this.props.data.id+'&status=In Progress'} role="button">Reject</a>
                    </div>
                </div>
                <hr/>
            </div>
        );
    }

}
