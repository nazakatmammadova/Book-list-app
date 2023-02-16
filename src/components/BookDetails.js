import React,{useContext} from 'react'
import {BookContext} from '../contexts/BookContext'
export default function BookDetails({book}) {
  const {removeBook}=useContext(BookContext)
  return (
    <li onClick={()=>removeBook(book.id)}>
        <div className='title'>{book.ad}</div>
        <div className='author'>{book.yazici}</div>
    </li>
  )
}
