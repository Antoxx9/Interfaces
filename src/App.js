import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import './sass/App.css'
import HomePage from "./containers/home";
import LoginPage from "./containers/login";
import GamePage from "./containers/games";
import SignUpPage from "./containers/signup";
import ProfilePage from "./containers/profile";
import AboutPage from "./containers/about";
import EditPage from "./containers/edit";
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
            <Route path="/signup" component={SignUpPage}/>
            <Route path="/profile" component={ProfilePage}/>
            <Route path="/games/game1" component={() => {return <GamePage title={'Aprendiendo Emociones'}
                                                                    game={'Aprender\n Entender \nReconocer'}
                                                                    gameNumber={1}/>}}/>
            <Route path="/games/game2" component={() => {return <GamePage title={'Tablero Mágico'}
                                                                          game={'Aprender\n Entender \nReconocer'}
                                                                          gameNumber={2}/>}}/>
            <Route path="/games/game3" component={() => {return <GamePage title={'Maneja tus Reflejos'}
                                                                          game={'Despertar\n Manejar \nReaccionar'}
                                                                          gameNumber={3}/>}}/>
            <Route path="/games/game4" component={() => {return <GamePage title={'Se creativo, Diviertete!'}
                                                                          game={'Crea\n Imagina \nInventa'}
                                                                          gameNumber={4}/>}}/>
            <Route path="/games/game5" component={() => {return <GamePage title={'Entrenando el cuerpo'}
                                                                          game={'Desarrolla\n Disfruta \nMuevete'}
                                                                          gameNumber={5}/>}}/>
            <Route path="/about" component={AboutPage} />
            <Route path="/edit" component={EditPage} />
          </Switch>
        </Router>
        </main>
    );
  }
}

export default App;
