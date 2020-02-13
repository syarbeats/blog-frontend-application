import React, {Component} from 'react';
import ProxyServices from '../../Service/ProxyServices'

class Todo extends Component{

    constructor(props) {
        super(props);
        this.state ={
            approval: []
        }
    }

    /*componentDidMount() {
        ProxyServices.getAllApprovalData('To Do')
            .then(response => response.data)
            .then((json) => {
                console.log("Response:", JSON.stringify(json));
                this.setState({approval: json});
                console.log("Approval Data:", (this.state.approval));
            }).catch(() => {
            })

    }*/


    componentDidMount() {
       /* this.setState({approval: this.props.todo})*/
        ProxyServices.getAllApprovalData('To Do')
            .then(response => response.data)
            .then((json) => {
                console.log("Response:", JSON.stringify(json));
                this.setState({approval: json});
                console.log("Approval Data:", (this.state.approval));
            }).catch(() => {
        })
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log("Receiving PROPSS...", nextProps);
        this.setState({approval: nextProps})
    }

    render() {

        let blog;


        if(this.state.approval.summary){
            blog = this.state.approval.map((data, i) => <BlogTodo key = {i} data = {data} />)
        }else{
            blog = this.props.todo.map((data, i) => <BlogTodo key = {i} data = {data} />)
        }

        return (
            <div>
                {blog}
            </div>
        );
    }

}

export default Todo;

class BlogTodo extends Component{

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header bg-primary text-white">{this.props.data.title}</div>
                    <div className="card-body">
                        <p>{this.props.data.createdDate}</p>
                        <p>{this.props.data.summary}......<a href="">Read More..</a></p>

                        <a className="btn btn-primary" href={"/blog/approval?id="+this.props.data.id+'&status=In Progress'} role="button">Process</a>
                    </div>
                </div>
                <hr/>
            </div>
        );
    }

}
