import React ,{memo}from 'react'
import classes from './EventContainer.module.scss'
import { BettingContainer } from '../../UI/BettingContainer/BettingContainer'
export const EventContainer = memo(({forceRerender}) => {
  return (
    <div className={classes.eventContainerWrapper}>
       <BettingContainer forceRerender={forceRerender}></BettingContainer>
    </div>
  )
})
