import React from 'react';
import Header from "../../components/header";
import Footer from "../../components/footer";
import Game from "../../components/games";

class GamePage extends React.Component{
  render() {
    return (
      <div>
        <Header logged={true}/>
        <Game title={this.props.title} game={this.props.game} gameNumber={this.props.gameNumber}/>
        <Footer/>
      </div>
    );
  }
}

export default GamePage;