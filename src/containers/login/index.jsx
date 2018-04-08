import React from 'react';
import Header from "../../components/header";
import Footer from "../../components/footer";
import Login from "../../components/login";

class LoginPage extends React.Component{
  render() {
    return (
      <div>
        <Header logged={false}/>
        <Login/>
        <Footer/>
      </div>
    );
  }
}

export default LoginPage;