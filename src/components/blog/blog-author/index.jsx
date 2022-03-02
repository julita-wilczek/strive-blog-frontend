import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import "./styles.css";


//BlogAuthor receives props from Blog Itam (object: author)
//These props now come from fecth in BlogList. No changes introduced to the code below.

export default class BlogAuthor extends Component {
  render() {
    const { name, avatar } = this.props;
    return (
      <Row>
        <Col xs={2}>
          <Image className="blog-author" src={avatar} roundedCircle />
        </Col>
        <Col>
          <div>by</div>
          <h6>{name}</h6>
        </Col>
      </Row>
    );
  }
}
