import React from 'react';
import { Editor, EditorState } from 'draft-js';

class BlogComment extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            editorState: EditorState.createEmpty(),
        }

        this.onEditorChange = this.onEditorChange.bind(this);
    }

    onEditorChange(editorState){
        console.log("TEXT:", this.state.editorState.getCurrentContent().getPlainText());
        this.setState({editorState});
    }

    render() {
        return(
            <div className="editorContainer">
                <div className="card">
                    <div className="card-header">
                        INSERT COMMENT
                    </div>
                    <div className="card-body">
                        <Editor editorState={this.state.editorState} onChange={this.onEditorChange}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogComment;
