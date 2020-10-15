//reducer is function, which sets state of component accoring to action and payload

import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
} from '../types';
 
export default (state,action)=>
{
switch(action.type)
{
    case SEARCH_USERS:
        //state object is imutable so we use the spread operator for getting the previous state and add new state with it.
        return{
            ...state,
            users:action.payload,
            loading:false
        };
         case SET_LOADING:
             return{
                 ...state,
                 loading:true
             };
}
}
