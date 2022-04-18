import React from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { Container, Form, Button } from "react-bootstrap";
import "./styles.css";
import { fetchPosts } from "../../data/fetches.js";
import { useState } from "react";
import { useEffect } from "react";

const NewBlogPost = ({setPosts, posts, authors}) => {
  
  const [text, setText] = useState()

 /*{ useEffect(() => {
    const data = fetchPosts()
    setPosts(data)
    console.log(posts)
  }, [])}*/

  const handleChange = (value) => {
    setText(value);
  }
  
    return (
      <Container className="new-blog-container">
        <Form className="mt-5">
          <Form.Group controlId="blog-form" className="mt-3">
            <Form.Label>Title</Form.Label>
            <Form.Control size="lg" placeholder="Title" />
          </Form.Group>
          <Form.Group controlId="blog-category" className="mt-3">
            <Form.Label>Category</Form.Label>
            <Form.Control size="lg" as="select">
            {posts.map(post => {return(<option>{post.category}</option>)})}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="blog-category" className="mt-3">
            <Form.Label>Author</Form.Label>
            <Form.Control size="lg" as="select">
            {authors.map(author => {return(<option>{author.name} {author.surname}</option>)})}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="blog-content" className="mt-3">
            <Form.Label>Blog Content</Form.Label>
            <ReactQuill
              //value={this.state.text}
              //onChange={this.handleChange}
              className="new-blog-content"
            />
          </Form.Group>
          <Form.Group className="d-flex mt-3 justify-content-end">
            <Button type="reset" size="lg" variant="outline-dark">
              Reset
            </Button>
            <Button
              type="submit"
              size="lg"
              variant="dark"
              style={{ marginLeft: "1em" }}
            >
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Container>
    );
  }

export default NewBlogPost