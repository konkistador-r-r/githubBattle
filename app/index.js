const React = require('react');
const ReactDOM = require('react-dom');
require('./index.css');

class Avatar extends React.Component {
    render() {
        console.log("This is Avatar");
        return (
            <img src={this.props.src} />
        );
    }
}

class Header extends React.Component {
    render() {
        console.log("This is Header");
        return (
            <h1>Name: {this.props.text}</h1>
        );
    }
}

class SubHeader extends React.Component {
    render() {
        console.log("This is SubHeader");
        return (
            <h2>Nick: {this.props.text}</h2>
        );
    }
}

class App extends React.Component {
    render() {
        console.log("This is App");
        return (
            <div>
                Hello, User!
                <Avatar src = {this.props.user.img}/>
                <Header text = {this.props.user.name}/>
                <SubHeader text = {this.props.user.userName} />
            </div>
        );
    }
}
var DATA = {
    name:"Vitalii",
    userName:"react-lector",
    img:"http://blog-assets.risingstack.com/2016/Jan/react_best_practices-1453211146748.png"
}

ReactDOM.render(
    <App user={DATA} />,
    document.getElementById('app')
);