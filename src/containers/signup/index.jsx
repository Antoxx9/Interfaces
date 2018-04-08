import React from 'react';
import Header from "../../components/header";
import Footer from "../../components/footer";
import SignUp from "../../components/signup";

class SignUpPage extends React.Component{
  render() {
    return (
      <div>
        <Header logged={false}/>
        <SignUp/>
        <Footer/>
      </div>
    );
  }
}

export default SignUpPage;