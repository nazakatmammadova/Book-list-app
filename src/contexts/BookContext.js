import React,{createContext,useState} from 'react';
import {v4 as uuidv4} from 'uuid'
export const BookContext=createContext();
const BookContextProvider=(props)=>{
    const [books,setBooks]=useState([
        {id:1,ad:"Suc ve Ceza",yazici:"Dostoyevski"},
        {id:2,ad:"Satranc",yazici:"Stefan Zweight"}
    ])
    const addbBook=(ad,yazici)=>{
        setBooks([...books,{id:uuidv4(),ad:ad,yazici:yazici}])
    }
    const removeBook=(id)=>{
        setBooks(books.filter(book=>book.id!=id))
    }
    return(
        <BookContext.Provider value={{books,addbBook,removeBook}}>
            {props.children}
        </BookContext.Provider>
    )
}
export default BookContextProvider