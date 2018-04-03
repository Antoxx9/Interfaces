import React from 'react';
import { Row, Col } from 'reactstrap'
import './styles.scss'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faCopyright, faLock } from '@fortawesome/fontawesome-free-solid'


class Footer extends React.Component {
  render () {
    return <div>
      <div className='phantom'/>
      <div className='footer'>
        <Row>
          <Col className='copyright' xs={4}>
            <FontAwesomeIcon className='icon' icon={faCopyright} size={'3x'} />
          </Col>
          <Col className='padding20' xs={4}>
            <span className='text'> Whatever you want to put here </span>
          </Col>
          <Col className='lock' xs={4}>
            <FontAwesomeIcon className='icon' icon={faLock} size={'3x'} />
          </Col>
        </Row>
      </div>
    </div>
  }
}

export default Footer;