import React from 'react';
import {Row, Col, Label} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import './styles.scss';
import {faPlay, faSyncAlt} from "@fortawesome/fontawesome-free-solid";

class Game extends React.Component {

  getCssBackGround(){
    if(this.props.gameNumber === 1){
      return 'game1'
    }
    else if(this.props.gameNumber === 2){
      return 'game2'
    }
    else if(this.props.gameNumber === 3){
      return 'game3'
    }
    else if(this.props.gameNumber === 4){
      return 'game4'
    }
    else{
      return 'game5'
    }
  }

  render () {
    return <div className='gamePage'>
      <section className='bg'>
        <Col xs={12} className='padding'>
          <div className='container'>
            <h1 className='name'>{this.props.title}</h1>
            <Row className='sideBar'>
              <Col xs={4}>
                <Row className='internPadding'>
                  <Label className='title'>{this.props.game}</Label>
                </Row>
                <Row className='internPadding'>
                  <Label className='labels'>Puntaje: 20pts</Label>
                </Row>
                <Row className='internPadding'>
                  <Label className='labels'>Clasificación: 1°</Label>
                </Row>
                <Row className='internPadding'>
                  <Col xs={3} className='margin40'>
                    <FontAwesomeIcon className='playIcon' icon={faPlay} size={'3x'} />
                  </Col>
                  <Col xs={4} className='margin40'>
                    <FontAwesomeIcon className='playIcon' icon={faSyncAlt} size={'3x'} />
                  </Col>
                </Row>
              </Col>
              <Col className={this.getCssBackGround()} xs={8}/>
            </Row>
          </div>
        </Col>
      </section>
    </div>
  }

}

export default Game;