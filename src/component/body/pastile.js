import React, {useState} from 'react'
import './body.css'

const Pastile = ({id, pid, pcolor})=>{
    let [color, setColor] = useState(pcolor)
    let [border, setBorder] = useState('')
    let [val, setVal] = useState(pid)
    return (
        <div style={{
            backgroundColor: color,
            border: border
        }}
        onMouseOver={()=> setBorder(border='dashed '+pcolor)}
        onMouseLeave={()=> setBorder(border='')}
        className='col-4 m-2' >{val}</div>
    )
}

export default Pastile