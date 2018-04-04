import React from 'react';
import {Row, Col, Container} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faAutoprefixer} from '@fortawesome/fontawesome-free-brands';
import {faEyeSlash, faMeh, faRedoAlt, faFrown} from '@fortawesome/fontawesome-free-solid';
import Card from '../card';
import './styles.scss';

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
          
          <hr/>
            <Container>
            <h2>CARACTERÍSTICAS</h2>
              <Row className="symptoms">
                <Card 
                  title="Ausencia o poco contacto visual" 
                  icon={faEyeSlash}
                />
                <Card 
                  title="Tieneden a tener comportamientos repetitivos" 
                  icon={faRedoAlt}
                />
                <Card 
                  title="Hypersensibilidad ante ciertos sonidos, olores, tactos, aspectos y sabores" 
                  icon={faFrown}
                />
              </Row>
              <Row> Terapias
                <Col>T1
                </Col>
                <Col> T2
                </Col>
                <Col> T3
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <section>
          Registrate menor
        </section>
      </div>
    );
  }
}

export default Home;