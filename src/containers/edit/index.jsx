import React from 'react';
import Header from "../../components/header";
import Footer from "../../components/footer";
import Home from "../../components/home";
import Edit from "../../components/edit";

class EditPage extends React.Component{
  render() {
    return (
      <div>
        <Header logged={true}/>
        <Edit/>
        <Footer/>
      </div>
    );
  }
}

export default EditPage;