import React from "react";

const ArticleLis = ({articles}) => {
return(
  <ul className="art-list">
    {articles.map(({objectID, author, url, title, points, parent_id}) => (
      <li className="art-list-item" key={objectID}>
        <a className="list-link" href={url}>{title}</a>
        <p className="list-text">{author}</p>
        <p className="list-text">{points}</p>
        <p>{parent_id}</p>
      </li>
    ))}
  </ul>
)}

export default ArticleLis;