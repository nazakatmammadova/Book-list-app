import React,{useContext} from 'react';
import {BookContext} from "../contexts/BookContext";

export default function Navbar() {
    const {books}=useContext(BookContext);
  return (
    <div className='navbar'>
        <h1>AOS Kitab listi</h1>
        <p>Hal-hazirda {books.length} eded kitab var.</p>
    </div>
  )
}
