import React, { Component } from 'react'
import { Button, FormGroup, Label, Input } from 'reactstrap';
import './sass/mainPage.css'

class MainPage extends Component {
  render() {
    return (
      <div className='container mainPage'>
        <div className='bgImg'>
          <Label className='mainText'> Bienvenido al sistema Nombre, un espacio dedicado para el apoyo y ayuda de las
            personas con autismo.
          </Label>

        <FormGroup className='form'>
          <Label className='text' for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="example@something.com" />
        </FormGroup>
        <FormGroup className='form'>
          <Label className='text' for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password" />
        </FormGroup>
        <Button className='button'>Log in</Button>
        </div>
      </div>
    );
  }
}

export default MainPage;