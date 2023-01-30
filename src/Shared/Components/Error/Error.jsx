import React from 'react'
import classes from './Error.module.scss'

export const Error = ({message}) => {
    return (
      <div className={classes.error}>{message}</div> 
    )
  }