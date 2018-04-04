import React from 'react';
import { Col } from 'reactstrap'
import './styles.scss'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

class Card extends React.Component {
  render () {
    return (
      <Col className="syntom">
        <FontAwesomeIcon className='cardIcon' icon={this.props.icon} size={'6x'} />
        <div>
          <p className="cardTitle">{this.props.title}</p>
          <p className="text">{this.props.message}</p>
        </div>
      </Col>
    );
  }
}

export default Card;