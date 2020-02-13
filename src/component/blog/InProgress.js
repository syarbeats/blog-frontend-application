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
        this.setState({approval: this.props.inprogress})
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
