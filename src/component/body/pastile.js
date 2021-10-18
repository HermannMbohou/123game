import React from 'react'
import './body.css'

const Pastile = ({id, pid, pcolor})=>{
    const color = ''
    return (
        <div style={{backgroundColor:color}} className='col-4 m-2'>{pid}</div>
    )
}

export default Pastile