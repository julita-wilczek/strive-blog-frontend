import React from "react";
import { Container } from "react-bootstrap";
import BlogList from "../../components/blog/blog-list";
import "./styles.css";
import { useEffect } from "react";

const Home = ({posts, setPosts}) => {

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async() => {
    try {
    const response = await fetch("http://localhost:3001/blogPosts/")
    if (response.ok) {
    const data = await response.json()
    console.log(data)
    setPosts(data)
    }
    
  } catch(error) {
    console.log(error)
  }
  }


    return (
      <Container fluid="sm">
        <h1 className="blog-main-title">Welcome to the Strive Blog!</h1>
        <BlogList posts={posts}/>
      </Container>
    );
  }

  export default Home