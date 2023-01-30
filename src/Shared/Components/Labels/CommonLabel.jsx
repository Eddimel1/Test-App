import React from 'react'
import classes from './CommonLabel.module.scss'
export const CommonLabel = ({children}) => {
  return (
    <div className={classes.label}>{children}</div>
  )
}
