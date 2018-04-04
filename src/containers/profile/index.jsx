import React from 'react';
import Header from "../../components/header";
import Footer from "../../components/footer";
import SignUp from "../../components/signup";
import Profile from "../../components/profile";

class ProfilePage extends React.Component{
  render() {
    return (
      <div>
        <Header logged={false}/>
        <Profile/>
        <Footer/>
      </div>
    );
  }
}

export default ProfilePage;