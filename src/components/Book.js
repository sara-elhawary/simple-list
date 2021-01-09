import React from 'react'

export const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <p>{author}</p>
    </article>
  )
}
