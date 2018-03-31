import React, { Component } from 'react';
import './sass/App.css'
import Header from './header'
import Footer from './footer'
import MainPage from './mainPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header logged={false}/>
        <div>
        <MainPage/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
