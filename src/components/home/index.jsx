import React from 'react';
import {Row, Col, Container, Button} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faAutoprefixer} from '@fortawesome/fontawesome-free-brands';
import {faEyeSlash, faMeh, faRedoAlt, faFrown, faUsers, faAssistiveListeningSystems, faCapsules} from '@fortawesome/fontawesome-free-solid';
import Card from '../card';
import './styles.scss';
import { width } from 'window-size';

class Home extends React.Component {
  render(){
    return(
      <div>
        <section className="parallaxSection">
          <div className="bigTitle">
          <FontAwesomeIcon className='logo' icon={faAutoprefixer} size={'10x'} />
            <h1>AUTISMOVIDA</h1>
            <p>Moviendo las vidas de niños autistas a mejor</p>
          </div>
        </section>
          
        <section class="infoSection">
          <div className="infoContainer">
            <div className="definition">
              <h2 className="titulito">EL AUTISMO</h2>
              <p> Es un trastorno del neurodesarrollo caracterizado por alteraciones
                en la interacción social, en la comunicación y por la presencia de 
                patrones de comportamiento restringidos y repetitivos</p>
            </div>
            <hr className="shrinkHr"/>
            <Container className="cardListList">
            
              <h2>CARACTERÍSTICAS</h2>
              <div className="listDescription">
                <p>Las personas con autismo no tienen características físicas que los
                  distingan de otras personas. Sin embargo, entre las cualidades más
                  resaltantes:</p>
                </div> 
              <Row className="cardList">
                <Card 
                  title="Ausencia o poco contacto visual" 
                  icon={faEyeSlash}
                  message="Menores que evitan el contacto visual y se aíslan"
                />
                <Card
                  title="Dificultades para identificar sentimientos"
                  message="Presentan complicaciones para comprender sentimientos de otras personas y expresar sus propias emociones."
                  icon={faMeh}
                />
                <Card 
                  title="Tieneden a tener comportamientos repetitivos"
                  message="Repiten acciones una y otra vez. Repiten o imitan palabras o frases que escuchan."
                  icon={faRedoAlt}
                />
                <Card 
                  title="Hypersensibilidad ante ciertos sonidos, olores, tactos, aspectos y sabores"
                  message="Reaccionan en forma peculiar ante ciertos olores, gustos, tacto, aspecto y sonidos"
                  icon={faFrown}
                />
              </Row>
              <hr/>
              <div className="listDescription">
                <h2>TERAPIAS</h2>
                <p>Una vez se ha identificado la presencia del trastorno en los individuos,
                  es necesario aplicar tratamientos adecuados que permitan al menos mitigar
                  los efectos de la enfermedad, razón por la cual se han desarrollado 
                  diversas tècnicas y mètodos </p>
              </div> 
              <Row className="cardList">
              <Card 
                  title="Terapia conductual" 
                  icon={faUsers}
                  message="Entrenamiento de comportamientos empleando la psicología conductista"
                />
                <Card
                  title="Programa de educación especial"
                  icon={faAssistiveListeningSystems}
                  message="Orientado a favorecer el desarrollo del lenguaje comunicativo y la interacción con otras personas."
                />
                <Card
                  title="Farmacoterapia"
                  icon={faCapsules}
                  message="Dependiendo del grado de autismo, puede requerirse prescripción de medicamentos"
                />
              </Row>
            </Container>
          </div>
        </section>
        <section className="registerSection">
          <div className="hollow">
            <h2>Regístrate</h2>
            <Button href="/signup" className="registerButton"color="link">Registrarse</Button>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;