import React from 'react';
import ReactPlayer from 'react-player';
import UCL from '../images/ucl.png';
import Liga from '../images/liga.png';
import Copa from '../images/copa.png';
import SuperCup from '../images/supercup.png';
import CWC from '../images/cwc.png';
import SuperCopa from '../images/supercopa.png';
import { Row, Col } from 'react-bootstrap'


const History = () => {
  return (
    <div className="container">
      <div className="container" id="trophies">
        <center><h2>FCB Trophy Count</h2></center><br/>
        <Row>
          <Col><img src={UCL} alt="Champions League" width="75px" height="75px" align="left"/><pre id="counter"> : 5</pre></Col>
          <Col><img src={Liga} alt="La Liga" width="75px" height="75px" align="left"/><pre id="counter"> : 26</pre></Col>
          <Col><img src={Copa} alt="Copa del Rey" width="75px" height="75px" align="left"/><pre id="counter"> : 30</pre></Col>
          <Col><img src={SuperCopa} alt="Copa del Rey" width="75px" height="75px" align="left"/><pre id="counter"> : 13</pre></Col>
          <Col><img src={SuperCup} alt="Super Cup" width="75px" height="75px" align="left"/><pre id="counter"> : 5</pre></Col>
          <Col><img src={CWC} alt="Club World Cup" width="75px" height="75px" align="left"/><pre id="counter"> : 3</pre></Col>
        </Row>
      </div>
      <br />
      <div className="container">
        <h1>History</h1>
        <p>Here you will find a selection of videos about our beloved club. We update these on a weekly basis. For more videos, you can visit the <a href="https://www.youtube.com/user/fcbarcelona">FC Barcelona Youtube page</a>.</p>
        <br />
        <center><h4>Brief History of FC Barcelona</h4>
        <br />
        <ReactPlayer url='https://www.youtube.com/watch?v=K3l6fnfy1nk'/></center>
        <br />
        <center><h4>2009: The Sextuple</h4>
        <br />
        <ReactPlayer url='https://www.youtube.com/watch?v=LdmVkqxqvrk'/></center>
        <br />
        <center><h4>2017: La Remontada</h4>
        <br />
        <ReactPlayer url='https://www.youtube.com/watch?v=W3gzX2I1T50'/></center>
      </div>
      <br />
    </div>
  )
}

export default History
