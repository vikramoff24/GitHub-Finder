import React from 'react';
import AlertContext from './alertContext'
import AlertReducer from './alertReducer'
import {SET_ALERT,REMOVE_ALERT} from "../types"

const AlertState=(props)=>
{
const initialState=()=>
{
alert:null
}

const [state, dispatch] = useReducer(AlertReducer, initialState)







return <AlertContext.Provider values ={
{alert:state.alert,}
}>



<AlertContext.Provider/>








}

export default 

