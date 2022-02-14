import React, { Children } from 'react'
import ReactDom from 'react-dom'

import './index.css';

import {books} from './books'
import Book from './Book'

function BookList() {
  return(
    <section className='bookList'>
      {books.map((book)=>{
        return(
          <Book book={book}></Book>
        )
      })}
    </section>
  )
}

ReactDom.render(<BookList/>,document.getElementById('root'))