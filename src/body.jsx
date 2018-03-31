import React from 'react';
import Header from "./header";
import Footer from "./footer";
import LoginPage from "./loginPage";
import Singup from "./singup";
import Profile from "./profile";

class Body extends React.Component{
  render() {
    return <div>
      <Header logged={true}/>
      <Profile/>
      <Footer/>
    </div>
  }
}

export default Body