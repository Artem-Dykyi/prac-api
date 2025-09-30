import React from "react";

const ArticleLis = ({articles})=>{
  <ul>
    {articles.map(({obId, autor, url, title, text, points, parentId})=>(
      <li key={obId}>
        <a href={url}>
          {title}
        </a>
        <p>{autor}</p>
        <p>{text}</p>
        <p>{points}</p>
        <p>{parentId}</p>
      </li>
    ))}
  </ul>
}

export default ArticleLis;