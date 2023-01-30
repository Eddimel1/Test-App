import React from 'react'
import { BettingBox } from '../BettingBox/BettingBox'
import classes from './BettingBoxContainer.module.scss'
export const BettingBoxContainer = ({data,forceRerender}) => {
    const {condition,...rest} = data
  return (
    <div className={classes.bettingBoxContainer}>
        <div>{condition}</div>
        <BettingBox forceRerender={forceRerender} data={{condition,...rest}}></BettingBox>
    </div>
  )
}
