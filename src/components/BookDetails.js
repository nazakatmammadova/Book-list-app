import React from 'react'

export default function BookDetails({book}) {
  return (
    <li>
        <div className='title'>{book.ad}</div>
        <div className='author'>{book.yazici}</div>
    </li>
  )
}
