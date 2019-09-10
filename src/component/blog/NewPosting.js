import React from 'react';
import Dropdown from "../dropdownmenu/CategoryDropdown";
import queryString from "query-string";
import ProxyServices from "../../Service/ProxyServices";

class NewPosting extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            blogs: []
        }
    }

    componentDidMount() {

        ProxyServices.getTodayPosting()
            .then(response => response.data)
            .then((json) => {
                console.log("Response:", JSON.stringify(json));
                this.setState({blogs: json});
                console.log("BLOGS:", (this.state.blogs));
            }).catch(() => {
            })
    }


    render() {
        return(
            <div style={{marginTop:'10px'}}>
                <div className="row" style={{marginLeft:'20px', marginRight:'20px'}}>
                    <div className="col-md-12">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li id="category-dropdown" className="nav-item active">
                                        <Dropdown/>
                                    </li>
                                    <li className="nav-item">
                                        <a id="new-posting" className="nav-link" href="/blog/new"><b>New Posting</b></a>
                                    </li>
                                    <li className="nav-item">
                                        <a id="my-posting" className="nav-link" href="/blog/my"><b>My Posting</b></a>
                                    </li>
                                </ul>
                                <form className="form-inline my-2 my-lg-0">
                                    <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                           aria-label="Search"/>
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                </form>
                            </div>
                        </nav>
                    </div>
                </div>
                <div id="data" className="row" style={{marginLeft:'30px', marginRight:'30px'}}>
                    {this.state.blogs.map((data, i) => <BlogData key = {i} data = {data} />)}
                    {console.log(this.state.blogs)}
                </div>
            </div>
        );
    }
}

class BlogData extends React.Component{
    render() {
        return(
            <div className="col-md-4" style={{marginTop: '20px'}}>
                <div className="jumbotron" style={{height:'600px'}}>
                    <h3>{this.props.data.title}</h3>
                    <p className="lead">{this.props.data.content.substr(0, 250)}</p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href={"/blog?title=" + this.props.data.title} role="button">Read more</a>
                    </p>
                </div>
            </div>


        );
    }
}

export default NewPosting;