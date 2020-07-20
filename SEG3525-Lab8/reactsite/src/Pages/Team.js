import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
// Goalkeepers
import MATS from '../images/terstegen.jpg';
import Neto from '../images/neto.jpg';
//Defenders
import Pique from '../images/pique.jpg';
import Umtiti from '../images/umtiti.jpg';
import Lenglet from '../images/lenglet.jpg';
import Firpo from '../images/firpo.jpg';
import Alba from '../images/alba.jpg';
import Semedo from '../images/semedo.jpg';
import Sergi from '../images/roberto.jpg';
//Midfielders
import Busquets from '../images/busquets.jpg';
import Rakitic from '../images/rakitic.jpg';
import Frenkie from '../images/frenkie.jpg';
import Vidal from '../images/vidal.jpg';
//Forwards
import Messi from '../images/leo.jpg';
import Suarez from '../images/suarez.jpg';
import Grizou from '../images/griezmann.jpg';
import Dembouz from '../images/dembele.jpg';
import Martin from '../images/braithwaite.jpg';

const Team = () => {
  return (
    <div className="container">
      <br />
      <h1>Team</h1>
      <pre>Meet the FC Barcelona squad.</pre>
      <center><pre><b>Go straight to: <a href="#gk">Goalkeepers</a> | <a href="#def">Defenders</a> | <a href="#mid">Midfielders</a> |
      <a href="#fwd"> Forwards</a></b></pre></center>
      <div id="gk">
        <h3>Goalkeepers</h3><br />
        <Row>
        <Col>
          <Card style={{ width: '10rem' }} bg="dark">
            <Card.Img variant="top" src={MATS} />
              <Card.Body>
                <Card.Title>Marc André Ter-Stegen</Card.Title>
                <Card.Text>
                  Squad Number: 1
                  Joined in: 2014
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '10rem' }} bg="dark">
              <Card.Img variant="top" src={Neto} />
                <Card.Body>
                  <Card.Title>Neto</Card.Title>
                  <Card.Text>
                    Squad Number: 13
                    Joined in: 2019
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
        </Row>
      </div><br />
      <div id="def">
        <h3>Defenders</h3><br />
        <Row>
        <Col>
          <Card style={{ width: '10rem' }} bg="dark">
            <Card.Img variant="top" src={Pique} />
              <Card.Body>
                <Card.Title>Gerard Piqué</Card.Title>
                <Card.Text>
                  Squad Number: 3
                  Joined in: 2008
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '10rem' }} bg="dark">
              <Card.Img variant="top" src={Lenglet} />
                <Card.Body>
                  <Card.Title>Clément Lenglet</Card.Title>
                  <Card.Text>
                    Squad Number: 15
                    Joined in: 2018
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '10rem' }} bg="dark">
                <Card.Img variant="top" src={Umtiti} />
                  <Card.Body>
                    <Card.Title>Samuel Umtiti</Card.Title>
                    <Card.Text>
                      Squad Number: 23
                      Joined in: 2016
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: '10rem'}} bg="dark">
                  <Card.Img variant="top" src={Alba}/>
                    <Card.Body>
                      <Card.Title>Jordi Alba</Card.Title>
                      <Card.Text>
                        Squad Number: 18
                        Joined in: 2012
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
        </Row><br />
        <Row>
        <Col>
          <Card style={{ width: '10rem' }} bg="dark">
            <Card.Img variant="top" src={Semedo} />
              <Card.Body>
                <Card.Title>Nelson Semedo</Card.Title>
                <Card.Text>
                  Squad Number: 2
                  Joined in: 2017
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '10rem' }} bg="dark">
              <Card.Img variant="top" src={Firpo} />
                <Card.Body>
                  <Card.Title>Junior Firpo</Card.Title>
                  <Card.Text>
                    Squad Number: 24
                    Joined in: 2019
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '10rem' }} bg="dark">
                <Card.Img variant="top" src={Sergi} />
                  <Card.Body>
                    <Card.Title>Sergi Roberto</Card.Title>
                    <Card.Text>
                      Squad Number: 20
                      Joined in: 2010
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
        </Row>
      </div><br/>
      <div id="mid">
        <h3>Midfielders</h3><br />
        <Row>
        <Col>
          <Card style={{ width: '10rem' }} bg="dark">
            <Card.Img variant="top" src={Busquets} />
              <Card.Body>
                <Card.Title>Sergio Busquets</Card.Title>
                <Card.Text>
                  Squad Number: 5
                  Joined in: 2008
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '10rem' }} bg="dark">
              <Card.Img variant="top" src={Frenkie} />
                <Card.Body>
                  <Card.Title>Frenkie de Jong</Card.Title>
                  <Card.Text>
                    Squad Number: 21
                    Joined in: 2019
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '10rem' }} bg="dark">
                <Card.Img variant="top" src={Vidal} />
                  <Card.Body>
                    <Card.Title>Arturo Vidal</Card.Title>
                    <Card.Text>
                      Squad Number: 23
                      Joined in: 2018
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: '10rem' }} bg="dark">
                  <Card.Img variant="top" src={Rakitic} />
                    <Card.Body>
                      <Card.Title>Ivan Rakitic</Card.Title>
                      <Card.Text>
                        Squad Number: 4
                        Joined in: 2014
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
        </Row>
      </div><br />
      <div id="fwd">
        <h3>Forwards</h3><br />
        <Row>
        <Col>
          <Card style={{ width: '10rem' }} bg="dark">
            <Card.Img variant="top" src={Messi} />
              <Card.Body>
                <Card.Title>Lionel Messi</Card.Title>
                <Card.Text>
                  Squad Number: 10
                  Joined in: 2004
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '10rem' }} bg="dark">
              <Card.Img variant="top" src={Suarez} />
                <Card.Body>
                  <Card.Title>Luis Suarez</Card.Title>
                  <Card.Text>
                    Squad Number: 9
                    Joined in: 2014
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '10rem' }} bg="dark">
                <Card.Img variant="top" src={Dembouz} />
                  <Card.Body>
                    <Card.Title>Ousmane Dembélé</Card.Title>
                    <Card.Text>
                      Squad Number: 11
                      Joined in: 2017
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: '10rem'}} bg="dark">
                  <Card.Img variant="top" src={Grizou}/>
                    <Card.Body>
                      <Card.Title>Antoine Griezmann</Card.Title>
                      <Card.Text>
                        Squad Number: 17
                        Joined in: 2019
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ width: '10rem'}} bg="dark">
                    <Card.Img variant="top" src={Martin}/>
                      <Card.Body>
                        <Card.Title>Martin Braithwaite</Card.Title>
                        <Card.Text>
                          Squad Number: 19
                          Joined in: 2020
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
        </Row><br />
      </div><br/>
    </div>
  )
}

export default Team
