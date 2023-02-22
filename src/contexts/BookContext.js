import React,{createContext,useReducer} from 'react';
import { BookReducer } from '../reducers/BookReducer'; 

export const BookContext=createContext();
const BookContextProvider=(props)=>{
    const [books,dispatch]=useReducer(BookReducer,[
        {id:1,ad:"Suc ve Ceza",yazici:"Dostoyevski"},
        {id:2,ad:"Satranc",yazici:"Stefan Zweight"}
    ])
    return(
        <BookContext.Provider value={{books,dispatch}}>
            {props.children}
        </BookContext.Provider>
    )
}
export default BookContextProvider