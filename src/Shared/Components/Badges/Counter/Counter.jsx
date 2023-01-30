import React from 'react'
import classes from './Counter.module.scss'
import {Pseudo}  from '../../Pseudo/Pseudo'
export const CounterBadge = ({count,color='black',css}) => {
  return (
    <Pseudo position='bottom_left'>
<div style={{backgroundColor:`${color}`,...css}} className={classes.badge}><div className={classes.count}>
    {count}
    </div></div>
    </Pseudo>
    
  )
}
