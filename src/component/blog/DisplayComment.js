import React from 'react';
import { EditorState, RichUtils, AtomicBlockUtils, ContentState } from 'draft-js';
import Editor from "draft-js-plugins-editor";
import { mediaBlockRenderer } from "./MediaBlockrenderer";
import ProxyServices from "../../Service/ProxyServices";

class InsertComment extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            editorState: EditorState.createWithContent(ContentState.createFromText('Hello')),
            comment: '',
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
        ProxyServices.getCommentByTitle("Test Blog")
            .then(response => response.data)
            .then((json) => {
                console.log("Response:", JSON.stringify(json));
                this.setState({editorState: EditorState.createWithContent(ContentState.createFromText(json.comment))});
            }).catch(() => {

        })
    }

    componentWillReceiveProps(newProps){
        //this.setState({editorState: EditorState.createWithContent(ContentState.createFromText(newProps.title))});
        ProxyServices.getCommentByTitle("Test Blog")
            .then(response => response.data)
            .then((json) => {
                console.log("Response:", JSON.stringify(json));
                this.setState({editorState: EditorState.createWithContent(ContentState.createFromText(json[0].comment + "By "+ json[0].username))});
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
                    <Editor editorState={this.state.editorState} onChange={this.onEditorChange} handleKeyCommand={this.handleKeyCommand}/>
                </div>
            </div>
        );
    }
}

export default InsertComment;
