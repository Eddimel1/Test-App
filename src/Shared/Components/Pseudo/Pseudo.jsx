import React from 'react'
import classes from './Pseudo.module.scss'

export const Pseudo = ({position,children}) => {
    return (
      <div className={`${classes.pseudo} ${classes[position]}`}>{children}</div>
    )
  }