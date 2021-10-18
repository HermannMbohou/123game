import React from 'react'
import './body.css'

let Tile = ({id, border, color, tile, setBorder})=>{
    return (
        <div onClick={()=>setBorder(id, color)} style={{backgroundColor: color, border: border}} className='col-3 m-2'>{tile}</div>
    )
}

export default Tile