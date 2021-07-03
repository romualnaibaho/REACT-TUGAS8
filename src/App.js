import React, { Component } from "react";
import Navigation from "./Layout/Navigation";
import Header from "./Layout/Header";
import Content from "./Layout/Content";

class App extends Component {
  render(){
    return (
      <div>
        <Navigation/>
        <Header/>
        <Content/>
      </div>
    );
  }
}

export default App;
