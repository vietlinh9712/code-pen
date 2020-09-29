import React ,{Component} from "react";
import './Editor.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import {Controlled as ControlledEditor} from "react-codemirror2";


class Editor extends Component{
    constructor(props) {
        super(props);

        this.state = {
            open : true
        }
        this.HandleChange = this.HandleChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        console.log(this.state)
        this.setState({
            open: !this.state.open
        })
    }

    HandleChange(editor, data, value){
        this.props.onChange(value,this.props.nameTitle)
    }

    render() {
        return(
            <div className={`editor-container  ${(this.state.open) ? '' : 'collapsed'}`}>
                <div className='editor-title'>
                    {this.props.nameTitle}
                    <button onClick={this.onClick}>O/C</button>
                </div>
                <ControlledEditor
                    onBeforeChange= {this.HandleChange}
                    value={this.props.value}
                    className='code-mirror-wrap'
                    options= {{
                        lineWrapping: true,
                        lint: true,
                        theme: 'material',
                        mode: this.props.language,
                        lineNumbers: true
                    }}
                />
            </div>
        )
    }
}

export default Editor;