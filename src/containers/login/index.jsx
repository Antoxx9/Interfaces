import React from 'react';
import Header from "../../components/header";
import Footer from "../../components/footer";
import Login from "../../components/login";
import Profile from "../../components/profile";

class LoginPage extends React.Component{
  render() {
    return (
      <div>
        <Header logged={true}/>
        <Login/>
        <Footer/>
      </div>
    );
  }
}

export default LoginPage;