import React from 'react';
import { Row, Col, Nav, Navbar, NavLink, NavItem } from 'reactstrap';
import './styles.scss';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/fontawesome-free-solid';
import {faCopyright} from '@fortawesome/fontawesome-free-regular';
import { faFacebookSquare, faGooglePlusG, faTwitter} from '@fortawesome/fontawesome-free-brands';

class Footer extends React.Component {
  render () {
    return (
      <div className='footer'>
        <Nav>
          <NavLink>
            <FontAwesomeIcon className='icon' icon={faFacebookSquare} size={'3x'} />
          </NavLink>
          <NavLink>
            <FontAwesomeIcon className='icon' icon={faGooglePlusG} size={'3x'} />
          </NavLink>
          <NavLink>          
            <FontAwesomeIcon className='icon' icon={faTwitter} size={'3x'} />
          </NavLink>
          <NavItem className="copyright">
            <NavLink>
              <p>Autismovida se reserva todos los derechos <FontAwesomeIcon className='icon' icon={faCopyright} size={'2x'} /></p> 
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default Footer;