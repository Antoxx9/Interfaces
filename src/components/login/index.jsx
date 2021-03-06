import React, { Component } from 'react'
import { Button, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { faGooglePlus, faFacebook } from '@fortawesome/fontawesome-free-brands'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import './styles.scss'

class Login extends Component {
  divstyle = {
    "background-color":"steelblue"
  }
  render() {
    return (
      <div style={this.divstyle}>
        <div className='container mainPage'>
          <Label className='mainText'>
            Log in Autismovida
          </Label>
          <div className='bgImg'>
            <Row xs={12}>
              <Col xs={6}>
                <Label className='mtext marginT' for="exampleEmail">Log into your account</Label>
                <FormGroup className='form'>
                  <Label className='mtext' for="exampleEmail">Email</Label>
                  <Input className='input' type="email" name="email" id="exampleEmail" placeholder="example@something.com" />
                </FormGroup>
                <FormGroup className='form'>
                  <Label className='mtext' for="examplePassword">Password</Label>
                  <Input className='input' type="password" name="password" id="examplePassword" placeholder="password" />
                </FormGroup>
                <Button className='button'>Log in</Button>
              </Col>
              <Col xs={6}>
                <Label className='mtext marginT' for="exampleEmail">Don't have an account <a href='/signup'>sign up</a></Label>
                <Row xs={12}>
                  <Col xs={2}>
                    <FontAwesomeIcon className='google logicon' icon={faGooglePlus} size={'3x'} />
                  </Col>
                  <Col xs={10}>
                    <Button className='google button'>Sign in with Google</Button>
                  </Col>
                </Row>
                <Row xs={12}>
                  <Col xs={2}>
                    <FontAwesomeIcon className='facebook logicon' icon={faFacebook} size={'3x'} />
                  </Col>
                  <Col xs={10}>
                    <Button className='facebook button'>Sign in with Facebook</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;