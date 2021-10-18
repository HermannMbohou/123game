import React, { Fragment } from 'react'
import './header.css'

const Button = ({reset})=>{
    return (
        <Fragment>
            <input onClick={reset} className='btn btn-primary' type='submit' value='New Game'/>
        </Fragment>
    )
}

export default Button