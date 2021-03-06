import React from 'react';
import { Row, Col, Nav, NavLink, NavItem } from 'reactstrap';
import './styles.scss';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faCopyright} from '@fortawesome/fontawesome-free-regular';
import { faFacebookSquare, faGooglePlusG, faTwitter} from '@fortawesome/fontawesome-free-brands';

class Footer extends React.Component {
  render () {
    var divStyle = {
     margin: '0 auto',
     width: '100%',
    };
    return (
      <div className='footer'>
        <Nav>
          <Row style={ divStyle }>
            <Col xs={3}>
              <NavLink>
                <FontAwesomeIcon className='icon' icon={faFacebookSquare} size={'3x'} />
              </NavLink>
            </Col>
            <Col xs={3}>
              <NavLink>
                <FontAwesomeIcon className='icon' icon={faGooglePlusG} size={'3x'} />
              </NavLink>
            </Col>
            <Col xs={3}>
              <NavLink>
                <FontAwesomeIcon className='icon' icon={faTwitter} size={'3x'} />
              </NavLink>
            </Col>
            <Col className="float-right" xs={3}>
              <NavItem className="copyright">
                <NavLink>
                  <p>Autismovida se reserva todos los derechos <FontAwesomeIcon className='icon' icon={faCopyright} size={'2x'} /></p> 
                </NavLink>
              </NavItem>
            </Col>
          </Row>
          
          
          
        </Nav>
      </div>
    );
  }
}

export default Footer;