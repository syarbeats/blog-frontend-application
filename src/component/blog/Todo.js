import React, {Component} from 'react';
import ProxyServices from '../../Service/ProxyServices'

class Todo extends Component{

    constructor(props) {
        super(props);
        this.state ={
            approval: []
        }
    }

   /* componentDidMount() {
        this.setState({approval: this.props.todo})
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log("Receiving PROPSS...", nextProps);
        this.setState({approval: nextProps})

    }
*/
    render() {

        let blog;

        blog = this.props.todo.map((data, i) => <BlogTodo key = {i} data = {data} />);

       /* if(this.state.approval.summary){
            console.log("Approval from state (didAmount & WillReceive)");
            blog = this.state.approval.map((data, i) => <BlogTodo key = {i} data = {data} />)
        }else{
            console.log("Approval from props");
            blog = this.props.todo.map((data, i) => <BlogTodo key = {i} data = {data} />)
        }*/

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
                        <p>{this.props.data.summary}......<a href={"/blog?title="+this.props.data.title}>Read More..</a></p>

                        <a className="btn btn-primary" href={"/blog/approval?id="+this.props.data.id+'&status=nil'+'&progress=In Progress'} role="button">Process</a>
                    </div>
                </div>
                <hr/>
            </div>
        );
    }

}
