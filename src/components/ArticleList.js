import React from "react";
import Article from "./Article"

function ArticleList({ post }) {

    const articleFolder = post.map((post) => {
        return (
            <Article 
            key={post.id} 
            title={post.title} 
            date={post.date} 
            preview={post.preview}
             />
        )
    })
    

    return (
        <main>
            {articleFolder}
        </main>
    );
}

export default ArticleList;
