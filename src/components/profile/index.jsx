import React, { Component } from 'react'
import {
  Button, FormGroup, Label, Input, Row, Col, Card, CardBody, CardImg, CardTitle, CardSubtitle,
  CardText
} from 'reactstrap';
import './styles.scss'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faTrophy } from "@fortawesome/fontawesome-free-solid";


class Profile extends React.Component{

  render() {
    return <div className='profile'>
      <Row xs={12}>
        <Col xs={6}>
          <Card>
            <CardImg className='image' top src={'https://parentinghub.co.za/wp-content/uploads/2017/10/Autism.jpg'} alt="Card image cap" />
            <CardBody className='body'>
              <CardTitle className='nameText'>Full Name</CardTitle>
              <CardText className='descText'>The description of the child, the mom, the dad, or whatever they want to put here</CardText>
              <Row xs={12}>
                <Col xs={1}>
                  <FontAwesomeIcon className='google icon' icon={faTrophy} size={'3x'} />
                </Col>
                <Col xs={8}>
                  <CardSubtitle className='text'>Range of the child in the games</CardSubtitle>
                </Col>
              </Row>
              <CardText className='phraseText'>Some phrase the user likes or not idc</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col xs={6}>
          <Row xs={12}>
          </Row>
        </Col>
      </Row>
    </div>
  }
}

export default Profile;