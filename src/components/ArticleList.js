import React from "react";
import Article from "../components/Article"



function ArticleList({ posts }) {
  return (
    <main>
        {posts.map((post)=> <Article title ={post.title} date ={post.date} preview={post.preview} key ={post.id}/>)}
    </main> 

  );
}

export default ArticleList;
