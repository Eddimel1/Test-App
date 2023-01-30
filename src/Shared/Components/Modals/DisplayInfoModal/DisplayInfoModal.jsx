import React from 'react'
import ReactDOM from 'react-dom'
import { useOutside } from './../../../../Shared/Hooks/useOutside'
import classes from './DisplayInfoModal.module.scss'

export const DisplayInfoModal = ({setActive,children,active}) => {
    const {ref} = useOutside(false,setActive)
  return ReactDOM.createPortal(
    <div className={`${classes.modal}`}>
        <div ref={ref} className={classes.container}>{children}</div>
    </div>
    ,document.querySelector('body')
  )
}