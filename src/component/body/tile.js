import React, { useState } from 'react'
import './body.css'
    // methods
    function getcolor(){
        let val = '#'+ Math.floor(Math.random() * 999999)
        if (val.length !== 7) {
            getcolor()
        }
        return val
    }

let Tile = ({id, remBorders, bord})=>{
    // variables
    let [color] = useState(getcolor())
    const setBorders = ()=>{
        remBorders(id, color)
    }
    return (
        <div onClick={()=>setBorders()} style={{backgroundColor: color, border: bord}} className='col-3 m-2'>{id+1}</div>
    )
}

export default Tile