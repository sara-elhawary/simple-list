import React from 'react'

const firstBook = {
  img:
    'https://images-na.ssl-images-amazon.com/images/I/51duGNoJO0L._SX329_BO1,204,203,200_.jpg',
  title: 'Keep Sharp: Build a Better Brain at Any Age',
  author: 'Sanjay Gupta M.D. ',
}
const secondBook = {
  img:
    'https://images-na.ssl-images-amazon.com/images/I/41L5qgUW2fL._SX327_BO1,204,203,200_.jpg',
  title: 'A Promised Land',
  author: 'Barack H. Obama',
}

export default function BookList() {
  return (
    <>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </>
  )
}

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <p>{author}</p>
    </article>
  )
}
