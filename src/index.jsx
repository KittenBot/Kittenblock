const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            projectID: null
        }
    }
    render(){
        return(<GUI>Hello world</GUI>)
    }
}

App.propTypes = {
    basePath: React.PropTypes.string
};

const appTarget = document.createElement('div');
document.body.appendChild(appTarget);

ReactDOM.render(<App basePath={process.env.BASE_PATH} />, appTarget);