import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
        this.state = { corsResponse: "" };
    }

    callAPI() {
        fetch(global.backendUrl + "/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);

    }
    corsAPI() {
        fetch(global.backendUrl + "/cors")
            .then(res => res.text())
            .then(res => this.setState({ corsResponse: res }))
            .catch(err => err);

    }
    globalAPI() {
        fetch(global.backendUrl + "/users")
            .then(res => res.text())
            .then(res => this.setState({ globalResponse: res }))
            .catch(err => err);

    }
    componentDidMount() {
        this.callAPI();
        this.corsAPI();
        this.globalAPI();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">{this.state.apiResponse}</p>
                <p className="cors-response">{this.state.corsResponse}</p>
                <p className="global-response">{this.state.globalResponse}</p>
            </div>
            
        );
        
    }
    
}

export default App;
