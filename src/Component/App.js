import React, {Component} from 'react';
import Editor from './Editor'
import CodeResult from './CodeResult'
import './App.css';


class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
            html: '',
            css: '',
            js: '',
            srcDoc: `<html>
            <body></body>
            <style></style>
            <script></script>
        </html>`
        }
        this.ChangeHandle = this.ChangeHandle.bind(this);
        this.aaaa = this.aaaa.bind(this);
    }

    ChangeHandle(value,title){
        if (title === 'HTML'){
            this.setState({
                html: value,
                css: this.state.css,
                js: this.state.js,
                srcDoc: this.state.srcDoc
            })
        }
        if (title === 'CSS'){
            this.setState({
                html: this.state.html,
                css: value,
                js: this.state.js,
                srcDoc: this.state.srcDoc
            })
        }
        if (title === 'JAVASCRIPT'){
            this.setState({
                html: this.state.html,
                css: this.state.css,
                js: value,
                srcDoc: this.state.srcDoc
            })
        }

    }

    setSrcDoc(srcDoc){
        console.log('aa')
        this.setState({
            html: this.state.html,
            css: this.state.css,
            js:  this.state.js,
            srcDoc: srcDoc
        })
    }

    aaaa(){
        console.log('a')
        this.timeout = setTimeout(() => {
            console.log('aaaaaaa');
            this.setSrcDoc(`
                <html>
                    <body>${this.state.html}</body>
                    <style>${this.state.css}</style>
                    <script>${this.state.js}</script>
                </html>
                `)
        },250)
    }

    componentDidUpdate() {// delay when user input
        clearTimeout(this.timeout)
        this.aaaa();
    }

    render() {
        return(
            <>
                <div className='pane top-pane'>
                    <Editor
                        language='xml'
                        nameTitle='HTML'
                        value={this.state.html}
                        onChange={this.ChangeHandle}
                    />
                    <Editor
                        language='css'
                        nameTitle='CSS'
                        value={this.state.css}
                        onChange={this.ChangeHandle}
                    />
                    <Editor
                        language='javascript'
                        nameTitle='JAVASCRIPT'
                        value={this.state.js}
                        onChange={this.ChangeHandle}
                    />
                </div>
                <div className='pane'>
                    <iframe
                        srcDoc={this.state.srcDoc}
                        title='output'
                        sandbox='allow-scripts'
                        frameBorder= '0'
                        width= '100%'
                        height= '100%'
                        />
                </div>
            </>
        )
    }
}

export default App;
