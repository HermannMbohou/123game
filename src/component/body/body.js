import React, { Fragment, useState } from 'react'
import './body.css'
import Pastile from './pastile'
import Tile from './tile'

const Body = ({move, play, insert})=>{

    let list1 = Object.keys(play)
        .map(
            (tile, index)=>{
                let border = ''
                let color = '#'+ Math.floor(Math.random() * 999999)
                return <Tile setBorder={()=>handleBoder(index, color)} border={border} key={index} tile={tile} id={index} color={color} />
            }
        )
    const list2 = Object.keys(insert)
        .map(
            (pastile, index)=>{
                return <Pastile key={index} id={index} pid='' />
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