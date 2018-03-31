import React from 'react';
import Header from "./header";
import Footer from "./footer";
import LoginPage from "./loginPage";
import Singup from "./singup";

class Body extends React.Component{
  render() {
    return <div>
      <Header logged={this.props.logged}/>
      <Singup/>
      <Footer/>
    </div>
  }
}

export default Body