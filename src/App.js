import React, { Component } from "react";
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import Content from "./components/Content";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Subject title="WEB" sub="world wide web!!" />
        <Subject title="React" sub="For UI" />
        <TOC />
        <Content title="HTML" desc="HTML is HyperText Markup Language." />
      </div>
    );
  }
}

export default App;
