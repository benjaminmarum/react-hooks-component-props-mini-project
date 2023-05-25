import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About"
import ArticleList from "./ArticleList"

console.log(blogData);
console.log(blogData.name);
console.log(blogData.about);
console.log(blogData.posts);

function App() {

  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About about={blogData.about} image={blogData.image}/>
      <ArticleList post={blogData.posts}/>
    </div>
  );
}

export default App;
