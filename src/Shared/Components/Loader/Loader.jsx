
import classes from './Loader.module.scss'

export const MainLoader = ({css}) => {

  return (
   <div style={css} className={classes.loader}></div>
  )
}