import React from "react";
import { Row, Col } from "react-bootstrap";
import BlogItem from "../blog-item";
//import posts from "../../../data/posts.json"; This file was replaced with fetch

const BlogList = ({posts}) => {

    return (
      <Row>
        {posts.map((post) => (
          <Col key={post.title} md={4} style={{ marginBottom: 50 }}>
            <BlogItem {...post} />
          </Col>
        ))}
      </Row>
    );
  }

export default BlogList