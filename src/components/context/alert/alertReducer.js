import {SET_ALERT,SHOW_ALERT} from "../types"

export default (state,action)=>
{
switch(actions.switch)
{
    case SET_ALERT:
        return {
            ...state,
            alert:action.payload
        }

    default:
        return state
}





}