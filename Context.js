import { createContext, useReducer } from 'react'

export const themeContext = createContext();
const initialstate = {darkMode: true};
const themeReducer = (state, action)=> {
    switch(action.type){
        case 'toggle':
            return {darkMode : state.darkMode};
            default:
                return state;
    };
}
