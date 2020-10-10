import React from 'react'
//destructuring of props object.
const Alert = ({alert}) => {
    return (
        alert !== null && (
        <div className={`alert alert-${alert.type}`}>
            <i className='fas fa-info-circle'/> {alert.msg}
        </div>)
    )
}


export default Alert 