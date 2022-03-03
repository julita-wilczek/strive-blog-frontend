import React, { useState } from "react";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./views/home";
import Blog from "./views/blog";
import NewBlogPost from "./views/new";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {

  const [posts, setPosts] = useState([])
  const [filtered, setFiltered] = useState([])
  
  return (
    <BrowserRouter>
      <NavBar setFiltered={setFiltered}/>
      <Route exact path="/"><Home setPosts={setPosts} posts={posts} filtered={filtered}/></Route> 
      <Route exact path="/blog/:id"><Blog posts={posts}/></Route>
      <Route path="/new" component={NewBlogPost} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
