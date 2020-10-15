import React,{useReducer} from 'react';
import AlertContext from './alertContext'
import AlertReducer from './alertReducer'
import {SET_ALERT,REMOVE_ALERT} from "../types"

const AlertState=(props)=>{
const initialState=
{
alert:null,
}

const [state, dispatch] = useReducer(AlertReducer, initialState)

//show Alert
const showAlert=(msg,type)=>
{
dispatch({type:SET_ALERT,payload:{msg,type}})
}



return (<AlertContext.Provider values={
{alert:state.alert,showAlert}}>
{props.children} 
</AlertContext.Provider>)
}

export default AlertState