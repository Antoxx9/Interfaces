import React from 'react';
import { Row, Col } from 'reactstrap'
import './styles.scss'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faCopyright, faLock } from '@fortawesome/fontawesome-free-solid'


class Footer extends React.Component {
  render () {
    return (
      <div className='footer'>
        <Row>
          <Col className='copyright' xs={3}>
            <FontAwesomeIcon className='icon' icon={faCopyright} size={'2x'} />
          </Col>
          <Col className='center' xs={3}>
            <span className='text'> Whatever you want to put here </span>
          </Col>
          <Col className='lock' xs={4}>
            <FontAwesomeIcon className='icon' icon={faLock} size={'3x'} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Footer;