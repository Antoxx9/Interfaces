import React, { Component } from 'react'
import { Button, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { faGooglePlus, faFacebook, faTwitter } from '@fortawesome/fontawesome-free-brands'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import './sass/singup.css'

class Singup extends Component {
  render() {
    return (
      <div className='container mainPage singup'>
        <Label className='mainText'>
          Create your account
        </Label>
        <div className='bgImg'>
          <Label className='text'>
            Please fill the data to create your account
          </Label>
          <Row xs={12}>
            <Col xs={6}>
              <FormGroup className='form'>
                <Input className='input' name="name" id="nombre" placeholder="Name *" />
              </FormGroup>
              <FormGroup className='form'>
                <Input className='input' type="email" name="email" id="exampleEmail" placeholder="E-mail *" />
              </FormGroup>
              <FormGroup className='form'>
                <Input className='input' type="password" name="password" id="examplePassword" placeholder="Password *" />
              </FormGroup>
            </Col>
            <Col xs={6}>
              <FormGroup className='form'>
                <Input className='input' name="name" id="lastnombre" placeholder="Last Name *" />
              </FormGroup>
              <FormGroup className='form'>
                <Input className='input' name="name" id="phone" placeholder="Phone Number" />
              </FormGroup>
              <FormGroup className='form'>
                <Input className='input' type="password" name="password" id="examplePassword" placeholder="Confirm Password *" />
              </FormGroup>
            </Col>
          </Row>
          <Row xs={12}>
            <Button className='button'>SING UP</Button>
          </Row>
        </div>
        <Label className='textBelow'>
          Already have an account <a href='/'>sign in</a>
        </Label>
      </div>
    );
  }
}

export default Singup;