import React,{useContext,useState} from 'react'
import { BookContext } from '../contexts/BookContext'

export default function BookForm() {
    const {addBook}=useContext(BookContext);
    const [title,setTittle]=useState('');
    const [author,setAuthor]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        addBook(title,author);
        setTittle('');
        setAuthor('');
    }
  return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='kitab adi' value={title} onChange={(e)=>setTittle(e.target.value)}/>
            <input type="text" placeholder='kitab yazici' value={author} onChange={(e)=>setAuthor(e.target.value)}/>
            <input type="submit" value='kitab elave et'/>
        </form>
  )
}
