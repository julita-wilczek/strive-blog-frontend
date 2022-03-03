import React from "react";
import { useState } from "react";
import { Container, Navbar, Button, FormControl, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./styles.css";


const NavBar = ({setFiltered}) => {

  const [query, setQuery] = useState("")
  const fetchQuery = async() => {
    try {
      const response = await fetch("http://localhost:3001/blogPosts?title=" + query)
      if (response.ok) {
      const data = await response.json()
      console.log(data)
      setFiltered(data)
      }
      
    } catch(error) {
      console.log(error)
    }

  }


  const search = (e) => {
    setQuery(e.target.value)
    console.log(query)
    fetchQuery()
  }

    return (
      <Navbar expand="lg" className="blog-navbar" fixed="top">
        <Container className="justify-content-between">
          <Navbar.Brand as={Link} to="/">
            <img className="blog-navbar-brand" alt="logo" src={logo} />
          </Navbar.Brand>
          <div className="d-flex justify-items-end">
          <Form className="d-flex me-2">
        <FormControl
          type="search"
          placeholder="Search"
          className="blog-navbar-search-form"
          aria-label="Search"
          onChange={(e) => search(e)}

        />
      </Form>
          <Button
            as={Link}
            to="/new"
            className="blog-navbar-add-button bg-dark"
            size="lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus-lg"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
            </svg>
            Post Article
          </Button>
          </div>
        </Container>
      </Navbar>
    );
  }

export default NavBar