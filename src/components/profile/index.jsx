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
    var sizestyle ={
      width: '60%',
      margin: '0 auto',
      "border-radius": "1rem",
    }
    return (
      <section className='profile'>
        <Card style={sizestyle}>
          <CardImg className='image' top src={'https://parentinghub.co.za/wp-content/uploads/2017/10/Autism.jpg'} alt="Card image cap" />
          <CardBody >
            <CardTitle className='nameText'>Robert Galarga</CardTitle>
            <CardSubtitle className='descText'>The description of the child. The description of the child. The description of the child. The description of the child.</CardSubtitle>
            <CardSubtitle className='descText'>Madre de Galarga</CardSubtitle>
            <CardSubtitle className='descText'>Padre Galarga</CardSubtitle>
            <CardSubtitle className='descText'>Correo de contacto</CardSubtitle>
            <CardSubtitle className='descText'>Espectro de clasificación</CardSubtitle>
            <CardText>
                  <FontAwesomeIcon icon={faTrophy} size={'3x'} />
                  <CardSubtitle className='text'>Clasificación del niño en los juegos</CardSubtitle>
            </CardText>
            <CardText className='phraseText'>Información Adicional</CardText>
            <Button href="/edit">Editar Perfil</Button>
          </CardBody>
        </Card>
      </section>
    );
  }
}

export default Profile;