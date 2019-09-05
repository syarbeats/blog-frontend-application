import React from 'react';
import { EditorState, RichUtils, AtomicBlockUtils, ContentState } from 'draft-js';
import Editor from "draft-js-plugins-editor";
import { mediaBlockRenderer } from "./MediaBlockrenderer";
import ProxyServices from "../../Service/ProxyServices";

class InsertComment extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            editorState: EditorState.createWithContent(ContentState.createFromText('')),
            comment: '',
            comments: [],
            blogId: '',
            blogTitle: ''
        }

        this.onEditorChange = this.onEditorChange.bind(this);
    }

    onEditorChange(editorState){
        console.log("TEXT:", this.state.editorState.getCurrentContent().getPlainText());
        this.setState({editorState, comment: this.state.editorState.getCurrentContent().getPlainText()});
    }

    handleKeyCommand = (command) => {
        const newState = RichUtils.handleKeyCommand(this.state.editorState, command)
        if (newState) {
            this.O(newState);
            return 'handled';
        }
        return 'not-handled';
    }

    componentDidMount() {
       /* ProxyServices.getCommentByTitle("Test Blog")
            .then(response => response.data)
            .then((json) => {
                console.log("Response:", JSON.stringify(json));

            }).catch(() => {

        })*/
    }

    componentWillReceiveProps(newProps){
        //this.setState({editorState: EditorState.createWithContent(ContentState.createFromText(newProps.title))});
        ProxyServices.getCommentByTitle(newProps.title)
            .then(response => response.data)
            .then((json) => {
                console.log("Response will props:", JSON.stringify(json));
                //this.setState({comments: json, editorState: EditorState.createWithContent(ContentState.createFromText(json[0].comment + "By "+ json[0].username))});
                this.setState({comments: json});
                console.log("COMMENTS will props:", this.state.comments);
            }).catch(() => {

        })
    }

    render() {

        return(
            <div className="card">
                <div className="card-header">
                    BLOG COMMENT
                </div>
                <div className="card-body">
                    <div style={{overflowY:'auto' , height: '300px'}}>
                        {this.state.comments.map((data, i) => <CommentList key = {i} data = {data} />)}
                        {console.log("COMMENTS:",this.state.comments)}
                    </div>
                </div>
            </div>
        );
    }
}

class CommentList extends React.Component{

    render() {
        return(
            <div>
                {this.props.data.comment} <br/>
                (<b>{this.props.data.username}</b>) <hr/>
            </div>
        );
    }
}

export default InsertComment;
