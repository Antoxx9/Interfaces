import React, { Component } from 'react'
import { Button, FormGroup, Label, Input, Row, Col, FormFeedback } from 'reactstrap';
import { faGooglePlus, faFacebook, faTwitter } from '@fortawesome/fontawesome-free-brands'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import './styles.scss'

class SignUp extends Component {

  state = {
    p1: "",
    p2: "",
  }

  p1intro = (e) => {
    const p1 = e.target.value;
    this.setState({...this.state,p1});
  }

  p2intro = (e) => {
    const p2 = e.target.value;
    this.setState({...this.state,p2});
  }

  render() {
    return (
      <section className="sigbn">
        <div className='container mainPage signup'>
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
                  <Input name="name" id="nombre" placeholder="Name *" />
                </FormGroup>
                <FormGroup className='form'>
                  <Input type="email" name="email" id="exampleEmail" placeholder="E-mail *" />
                </FormGroup>
                <FormGroup className='form'>
                  <Input valid={(this.state.p1===this.state.p2) && this.state.p1!=""} onChange={this.p1intro} type="password" name="password" id="Password" placeholder="Password" />
                </FormGroup>
              </Col>
              <Col xs={6}>
                <FormGroup className='form'>
                  <Input name="name" id="lastnombre" placeholder="Last Name *" />
                </FormGroup>
                <FormGroup className='form'>
                  <Input name="name" id="phone" placeholder="Phone Number" />
                </FormGroup>
                <FormGroup className='form'>
                  <Input valid={(this.state.p1===this.state.p2) && this.state.p2!=""} invalid={!(this.state.p1===this.state.p2)} onChange={this.p2intro} type="password" name="password" id="examplePassword" placeholder="Confirm Password" />
                  <FormFeedback>Confirmación diferente</FormFeedback>
                </FormGroup>
              </Col>
            </Row>
            <Row xs={12}>
              <Button disabled={!(this.state.p1===this.state.p2) || this.state.p2=="" || this.state.p1==""} className='button'>SING UP</Button>
            </Row>
          </div>
          <Label className='textBelow'>
            Already have an account <a href='/login'>sign in</a>
          </Label>
        </div>
      </section>
    );
  }
}

export default SignUp;