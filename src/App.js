import React, { Component } from 'react';
import './sass/App.css'
import Body from "./containers/body";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Body/>
      </div>
    );
  }
}

export default App;
