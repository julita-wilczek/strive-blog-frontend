import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import BlogAuthor from "../../components/blog/blog-author";
import BlogLike from "../../components/likes/BlogLike";


import "./styles.css";

const Blog = ({posts}) => {

  const [blog, setBlog] = useState({})
  const history = useHistory()
  console.log(history)
  const [loading, setLoading] = useState(true)
  const params = useParams()

  useEffect(() => {
    const id = params.id
    const blog = posts.find((post) => post._id === id)
    if (blog) {
      setBlog(blog)
      setLoading(false)
    } else{
      history.push("/404")
    } 
  }, [])

  return (
    <>
    {loading && (<div>loading</div>)}
    {!loading && (
      <div className="blog-details-root">
    <Container>
      <Image className="blog-details-cover" src={blog.cover} fluid />
      <h1 className="blog-details-title">{blog.title}</h1>

      <div className="blog-details-container">
        <div className="blog-details-author">
          <BlogAuthor {...blog.author} />
        </div>
        <div className="blog-details-info">
          <div>{blog.createdAt}</div>
          <div>{`${blog.readTime.value} ${blog.readTime.unit} read`}</div>
          <div style={{marginTop:20}}>
            <BlogLike defaultLikes={["123"]} onChange={console.log}/>
          </div>
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
    </Container>
  </div>)}
  </>
  )

  }
  


export default Blog;
