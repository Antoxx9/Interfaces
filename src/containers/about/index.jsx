import React from 'react';
import Header from "../../components/header";
import Footer from "../../components/footer";
import Home from "../../components/home";
import About from "../../components/about";

class AboutPage extends React.Component{
  render() {
    return (
      <div>
        <Header logged={true}/>
        <About/>
        <Footer/>
      </div>
    );
  }
}

export default AboutPage;