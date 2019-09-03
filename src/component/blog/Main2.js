import React from 'react';
import ProxyServices from '../../Service/ProxyServices';
import axios from "axios";

class Main extends React.Component{

    constructor(props){
        super(props);

        let today = new Date();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        this.state = {
            blogs: [],
            categories: [],
            category: 'Enterprise Application Integration',
            categoryId: 0,
            title: '',
            content: '',
            date: date,
            message: ''
        }
        this.onCategoryOnChange = this.onCategoryOnChange.bind(this);
        this.onSubmitBlog = this.onSubmitBlog.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onContentChange = this.onContentChange.bind(this);
    }

    onCategoryOnChange(event){
        console.log("Category:", event.target.options[event.target.selectedIndex].text);
        console.log("Category ID:", event.target.value);
        this.setState({category: event.target.options[event.target.selectedIndex].text, categoryId: event.target.value});
    }

    onSubmitBlog(event){
        console.log("Category Id:", event.target.key);

        if(this.state.title != "" && this.state.category !== "" && this.state.content !== ""){
            let payload = {
                categoryId: this.state.categoryId,
                categoryName: this.state.category,
                content: this.state.content,
                title: this.state.title,
            }

            ProxyServices.submitBlog(payload)
                .then(response => response.data)
                .then((json) => {
                    console.log("Response:", JSON.stringify(json));
                    this.props.history.push("/")
                }).catch(() => {
                this.setState({showSuccessMessage: false});
            })
        }else{
            this.setState({message: 'please insert all required field'});
        }

    }

    onTitleChange(event){
        console.log("Title:", event.target.value);
        this.setState({title: event.target.value});
    }

    onContentChange(event){
        console.log("content:", event.target.value);
        this.setState({content: event.target.value});
    }

    componentDidMount() {
        ProxyServices.getCategoryList()
            .then(response => response.data)
            .then((json) => {
                console.log("Response:", JSON.stringify(json));
                this.setState({categories: json});
                console.log("Categories:", (this.state.categories));
            }).catch(() => {
        })
    }

    render() {

        let data = this.state.categories;

        return(
            <div className="card">
                <div className="card-header">
                    CREATE BLOG [{this.state.message}]
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-1">
                            Title:
                        </div>
                        <div className="col-md-7" style={{marginLeft:'0px'}}>
                            <input type="text" name="title" id="id" onChange={this.onTitleChange} placeholder="Please insert the blog title..." size="50"/>
                        </div>
                        <div className="col-md-4" style={{marginLeft:'0px'}}>
                        </div>
                    </div>
                    <div className="row" style={{marginTop:'20px'}}>
                        <div className="col-md-1">
                            Category:
                        </div>
                        <div className="col-md-7" style={{marginLeft:'0px'}}>
                            {/*<Dropdown/>*/}
                            <select id="category" onChange={this.onCategoryOnChange}>
                            {this.state.categories.map((data, i) => <CategoryList key = {i} data = {data} />)}
                            {console.log(this.state.categories)}
                            </select>
                        </div>
                        <div className="col-md-4" style={{marginLeft:'0px'}}>
                        </div>
                    </div>
                    <div className="row" style={{marginTop:'20px'}}>
                        <div className="col-md-1">
                            Blog:
                        </div>
                        <div className="col-md-7" style={{marginLeft:'0px'}}>
                            {/*<EditorComponent/>*/}
                            <textarea rows = "20" cols = "120" name = "description" id="content" onChange={this.onContentChange}>
                            </textarea>
                        </div>
                        <div className="col-md-4" style={{marginLeft:'0px'}}>
                        </div>
                    </div>
                    <div className="row" style={{marginTop:'20px'}}>
                        <div className="col-md-1">
                        </div>
                        <div className="col-md-7" style={{marginLeft:'0px'}}>
                            <button className="btn btn btn-primary" onClick={this.onSubmitBlog}>Submit</button>
                        </div>
                        <div className="col-md-4" style={{marginLeft:'0px'}}>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class CategoryList extends React.Component{
    render() {
        return(
            <option value={this.props.data.id}>{this.props.data.name}</option>
        );
    }
}

export default Main;

