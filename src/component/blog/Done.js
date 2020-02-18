import React, {Component} from 'react';
import ProxyServices from "../../Service/ProxyServices";

class Done extends Component{

    constructor(props) {
        super(props);
        this.state ={
            approval: [],
            status: ''
        }
    }

    /*componentDidMount() {
        this.setState({approval: this.props.done})
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({approval: nextProps})
    }*/

    render() {

        let blog;

        blog = this.props.done.map((data, i) => <BlogDone key = {i} data = {data} />)

        /*if(this.state.approval.summary){
            blog = this.state.approval.map((data, i) => <BlogDone key = {i} data = {data} />)
        }else{
            blog = this.props.done.map((data, i) => <BlogDone key = {i} data = {data} />)
        }*/

        return (
            <div>
                {blog}
            </div>
        );
    }

}

export default Done;

class BlogDone extends Component{

    render() {

        let status;

        if(this.props.data.status){
            status = "Approved";
        }else {
            status = "Rejected";
        }

        return (
            <div>
                <div className="card">
                    <div className="card-header bg-secondary text-white">{this.props.data.title}</div>
                    <div className="card-body">
                        <p>{this.props.data.createdDate}</p>
                        <p>{this.props.data.summary}......<a href="">Read More..</a></p>

                        <div className={this.props.data.status ? "col-md-12 btn-info" : "col-md-12 btn-warning"}>
                            <center><label className={this.props.data.status ? "btn-info" : "btn-warning"}><b>{status}</b></label></center>
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
        );
    }

}
