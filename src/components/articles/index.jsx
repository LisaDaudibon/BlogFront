import React from 'react'

function Articles(props) {
  return (
    <>
      <h1>Tous mes articles depuis mon API</h1>
      {props.articles.map((article) => {
        return (<div key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.content}</p>
        </div>
        );
      })}
    </>
  )
}

export default Articles;