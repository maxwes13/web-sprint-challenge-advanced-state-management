import React, { Component } from "react";
import "./App.css";
import SmurfList from "./Smurfs";
import SmurfForm from "./SmurfForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/ Redux</h1>
        <SmurfList />
        <SmurfForm />
      </div>
    );
  }
}

export default App;