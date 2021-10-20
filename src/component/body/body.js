import React, { Fragment, useState } from 'react'
import './body.css'
import Pastile from './pastile'
import Tile from './tile'

const Body = ({move, play, insert})=>{
    const removeBorders = (iid, icolor) => {
        console.log(iid+' '+icolor); //log
        let tempPlay = {...list1}
        setList1(list1 = Object.keys(tempPlay)
        .map(
            (tile, index)=>{
                return <Tile
                            bord={index===iid?'dashed black':''}
                            remBorders={()=>removeBorders(index)}
                            key={index}
                            id={index} />
            }
        ))
        setTileSelected(tileSelected=iid)
        setColorSelected(colorSelected=icolor)
    }

    let [colorSelected, setColorSelected] = useState('')
    let [tileSelected, setTileSelected] = useState('')
    let [pastTileSelected, setPastTileSelected] = useState('')

    let [plays, setPlay] = useState(play)

    let [list1, setList1] = useState(Object.keys(plays)
        .map(
            (tile, index)=>{
                return <Tile
                            bord={''}
                            remBorders={()=>removeBorders(index)}
                            key={index}
                            id={index} />
            }
        ))
    const list2 = Object.keys(insert)
        .map(
            (pastile, index)=>{
                return <Pastile 
                    key={index}
                    id={index}
                    pid={tileSelected!==''?tileSelected:''}
                    pcolor={colorSelected!==''?colorSelected:''} />
            }
        )
    return (
        <Fragment>
            <div className='container row mt-3'>
                <div id='play' className='col-lg-6 col-md-6 col-sm-12 col-xs-12 m-auto'>
                    <div className='a row row-cols-3'>
                        {/**where to display tiles to move */}
                        {
                            list1
                        }
                    </div>
                    <div id='moves' className='row row-cols'>
                        {move} moves left.
                    </div>
                    <div id='lose' className='row row-cols'>
                        Game finished, You lose
                    </div>
                </div>
                <div id='congrat' className='display-3 col-lg-6 col-md-6 col-sm-12 col-xs-12 m-auto'>
                    💐
                    YOU WIN
                </div>
                <div id='insert' className='col-lg-6 col-md-6 col-sm-12 col-xs-12 m-auto'>
                    <div className='b row row-cols-3'>
                        {/**where to display moved tiles */}
                        {
                            list2
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Body