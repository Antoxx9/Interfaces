import React from 'react';
import {Row, Col, Container} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faAutoprefixer} from '@fortawesome/fontawesome-free-brands';

import './styles.scss';

class Home extends React.Component {
  render(){
    return(
      <div>
        <section className="parallax">
          <div className="bigTitle">
          <FontAwesomeIcon className='logo' icon={faAutoprefixer} size={'10x'} />
            <h1>AUTISMOVIDA</h1>
            <p>Moviendo las vidas de niños autistas a mejor</p>
          </div>
        </section>
          <h2>El Autismo</h2>
          
        <section>
          <Container>
          <Row>
              <Col>
              </Col>
              <Col> 
              </Col>
              <Col> 
              </Col>
            </Row>
            <Row>Sintomas
              <Col>S1
              </Col>
              <Col> S2
              </Col>
              <Col> S3
              </Col>
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
        </section>
        <section>
          Registrate menor
        </section>
      </div>
    );
  }
}

export default Home;