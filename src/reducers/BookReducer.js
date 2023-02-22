import {v4 as uuidv4} from 'uuid'

export const BookReducer=(state,action)=>{
    switch (action.type) {
        case 'ADD_BOOK':
            return[...state,{
                id:uuidv4(),
                ad:action.book.ad,
                yazici:action.book.yazici
            }]
        case 'REMOVE_BOOK':
            return state.filter(book=>book.id != action.id)
        default:
            return state;
    }
}