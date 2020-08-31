import React, { Component } from "react";
import "./App.css";

class Subject extends Component {
  render() {
    return (
      <header>
        <h1>WEB</h1>
        world wild web!
      </header>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Subject />
      </div>
    );
  }
}

export default App;
