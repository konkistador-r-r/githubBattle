const React = require('react');
const ReactDOM = require('react-dom');
require('./index.css');

const App = require('./Components/App');

var DATA = {
    name:"Vitalii",
    userName:"react-lector",
    img:"http://blog-assets.risingstack.com/2016/Jan/react_best_practices-1453211146748.png"
}

ReactDOM.render(
    <App user={DATA} />,
    document.getElementById('app')
);