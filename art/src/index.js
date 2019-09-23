'use strict';

var React = require('./react');
var ReactDOM = require('./react-dom');
// var VectorWidget = require('./VectorWidget');
class VectorWidget extends React.Component {
    render() {
        return <div>123</div>
    }
}

ReactDOM.render(<VectorWidget />, document.getElementById('index'));
