import React from 'react'
import { books } from './books'
import { Book } from './Book'

export default function BookList() {
  return (
    <section className="book-list">
      {books.map((book) => {
        return <Book key={book.id} {...book} />
      })}
    </section>
  )
}
