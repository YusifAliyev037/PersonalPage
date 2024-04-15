import React, { createContext, useContext, useReducer, useState } from 'react'



export const globalContext = createContext();

const INITIAL_STATE = {
    favorites: [],
    is_loading: false
}

function reducer(state,action){
    switch(action.type){
        case "TOGGLE_FAV":


        return

        default:
            return state;  
    }

}


function GlobalProvider({children}) {
    // const [favorits, setFavorits] = useState([]);

    const [state,dispatch] = useReducer(reducer,INITIAL_STATE)

    const value = {
        state,
        dispatch
    }


  return <globalContext.Provider value={value}>{children}</globalContext.Provider>
}


export default GlobalProvider



export const useGlobalStore = ()=>{
    const value = useContext(globalContext);
    return value;
}
