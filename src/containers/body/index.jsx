import React from 'react';
import Header from "../../components/header";
import Footer from "../../components/footer";
import LoginPage from "../../components/login";
import SignUp from "../../components/signup";
import Profile from "../../components/profile";

class Body extends React.Component{
  render() {
    return (
      <div>
        <Header logged={true}/>
        <Profile/>
        <Footer/>
      </div>
    );
  }
}

export default Body;