// reducer is a executer : logic wala sara kaam reducer karega...

import { ADD_TO_CART, REMOVE_FROM_CART } from "./constant";

const initialState = [];   // as we have a cllection of Items. that's why array

export function reducer(state = initialState, action){
      switch(action.type){
         case ADD_TO_CART : 
             return [
                ...state,
                action.data
             ]
         case REMOVE_FROM_CART : 
           let result = state.filter(item => item.name != action.data);
             return [...result];

        default: 
            return state;  // current state (as the initial will keep getting updated...)
      }
}
