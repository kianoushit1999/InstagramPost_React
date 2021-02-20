import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faHeart as Heart } from '@fortawesome/free-solid-svg-icons';
import {faHeart, faPaperPlane, faComment} from '@fortawesome/free-regular-svg-icons'
import Faker from 'faker';
import Avatar from "react-avatar";
import { Container, Row, Col, Card, Alert } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


const App = (props) => {
    let username = Faker.internet.userName();
    return (
        <div className="App">
            <Container>
                <Row>
                    <Col xs={12} className="d-flex justify-content-center mx-auto">
                        <Card className="card-centerize">
                            <Card.Title>
                                <Row>
                                    <Col xs={11} className="d-flex justify-content-start">
                                        <Avatar name={username} size="25" textSizeRatio={1} round={true}/>
                                        <div className="ml-1">
                                            {username}
                                        </div>
                                    </Col>
                                    <Col xs={1}>
                                        <FontAwesomeIcon icon={faEllipsisV}></FontAwesomeIcon>
                                    </Col>
                                </Row>
                            </Card.Title>
                            <Card.Img variant="top" src={Faker.image.image()} className="fix-pictures"/>
                            <Card.Body className="px-0 pt-1">
                                <div>
                                    <span className="px-1"><FontAwesomeIcon icon={faHeart} /></span>
                                    <span className="px-1"><FontAwesomeIcon icon={faPaperPlane} /></span>
                                    <span className="px-1"><FontAwesomeIcon icon={faComment} /></span>
                                </div>
                                <Card.Text>
                                    {Faker.lorem.lines(4)}
                                </Card.Text>
                                <div className="decrease-fontsize">
                                    <div className="pl-1" style={{fontWeight: 'bold'}}>Comments</div>
                                    <div className="pl-3">
                                        <span className="d-flex justify-content-start align-items-baseline">
                                            <span><Avatar name={username} size="12" textSizeRatio={0.05} round={true}/></span>
                                            <span className="pl-1">{username}</span>
                                        </span>
                                        <div className="d-flex justify-content-between" id="auto-height">
                                            <p className="pl-4">{Faker.lorem.lines(1)}</p>
                                            <span><FontAwesomeIcon icon={faHeart}/></span>
                                        </div>
                                    </div>
                                {/*    */}
                                    <div className="pl-3">
                                        <span className="d-flex justify-content-start align-items-baseline">
                                            <span><Avatar name={username} size="12" textSizeRatio={0.05} round={true}/></span>
                                            <span className="pl-1">{username}</span>
                                        </span>
                                        <div className="d-flex justify-content-between" id="auto-height">
                                            <p className="pl-4">{Faker.lorem.lines(1)}</p>
                                            <span><FontAwesomeIcon icon={Heart} style={{ color: "red"}}/></span>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default App;