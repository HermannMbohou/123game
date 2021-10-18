import React, {Component, Fragment} from 'react'
import './header.css'
import Title from './title'
import Button from './button'

const Header = ({reset})=>{
    return (
        <Fragment>
            <header>
                <Title/>
                <Button reset={reset}/>
            </header>
        </Fragment>
    )
}

export default Header