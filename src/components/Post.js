import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import Avatar from "react-avatar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisV, faHeart as Heart} from "@fortawesome/free-solid-svg-icons";
import Faker from "faker";
import {faComment, faHeart, faPaperPlane} from "@fortawesome/free-regular-svg-icons";
import Comment from "./Comment";



const Post = () => {

    let username = Faker.internet.userName();

    return (
      <div>
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
                                  <br />
                                  <small style={{color: 'grey'}}>5h</small>
                              </Card.Text>
                              <Comment></Comment>
                          </Card.Body>
                      </Card>
                  </Col>
              </Row>
          </Container>
      </div>
    )
}

export default Post;