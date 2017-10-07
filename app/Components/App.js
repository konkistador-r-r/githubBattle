const React = require('react');
const ReactDOM = require('react-dom');
const Popular = require('./Popular');

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
            <div className="container">
                Hello, User!
                <Avatar src = {this.props.user.img}/>
                <Header text = {this.props.user.name}/>
                <SubHeader text = {this.props.user.userName} />
                <Popular/>
            </div>
        );
    }
}

module.exports = App;