import React from 'react'
import {
  Button, FormGroup, Label, Input, FormText, Form, FormFeedback, Container
} from 'reactstrap';
import './styles.scss'


class EditProfile extends React.Component{

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
    var colorstyle ={
      "background-color": "white",
    }
    return (
      <section className="edit">
      <Container style={colorstyle}>
        <Form className="editForm">
          <FormGroup>
            <Label for="exampleText">Nombre</Label>
            <Input type="text" name="text" id="exampleText" placeholder="Elvis Tek" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Nombre del Padre</Label>
            <Input type="text" name="text" id="exampleText" placeholder="Larry Meltrozo" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Nombre de la Madre</Label>
            <Input type="text" name="text" id="exampleText" placeholder="Deborah Kapiha"/>
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="correo@meme.com" />
            <FormFeedback>Introduzca un correo válido </FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input valid={(this.state.p1===this.state.p2) && this.state.p1!=""} onChange={this.p1intro} type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </FormGroup>
          <FormGroup>
          <Label for="examplePassword">Confirm Password</Label>
            <Input valid={(this.state.p1===this.state.p2) && this.state.p2!=""} invalid={!(this.state.p1===this.state.p2)} onChange={this.p2intro} type="password" name="password" id="examplePassword" placeholder="password placeholder" />
            <FormFeedback>Confirmación diferente</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Espectro al que pertenece</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Descripción</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleFile">Foto de perfil</Label>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">
              Nuestros servidores explotan si subes un meme
            </FormText>
          </FormGroup>
          <FormGroup tag="fieldset">
            <legend>Radio Buttons</legend>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" />{' '}
                Quiero recibir marejadas de Spam
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" />{' '}
                No quiero no recibir marejadas de Spam
              </Label>
            </FormGroup>  
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" />{' '}
              Donar Alma
            </Label>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </Container>
      </section>
    );
  }
}

export default EditProfile;