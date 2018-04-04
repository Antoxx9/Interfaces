import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import './sass/App.css'
import HomePage from "./containers/home";
import LoginPage from "./containers/login";
import {BrowserRouter as Router, Route, Switch, } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <main className="App">
        <Helmet
          titleTemplate="Autismovida - %s"
          defaultTitle="Autismovida"
          link={[
            {rel: "canonical", href: "https://www.autimovida.meme"},
            {rel: "icon", href: "https://d30y9cdsu7xlg0.cloudfront.net/png/1130068-200.png"}
          ]}
        />
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/login" component={LoginPage}/>
          </Switch>
        </Router>
        </main>
    );
  }
}

export default App;
