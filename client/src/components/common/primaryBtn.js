import React from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import pallet from './colors.js'

const useStyle = makeStyles((theme) => ({
  button: {
    backgroundColor: pallet.blue,
    color: pallet.white,
    textTransform: "none",
    borderRadius: 25,
    '&:hover': {
      backgroundColor: pallet.blue
    }
  }
}))

const PrimaryBtn = (props) => {
  const classes = useStyle()
  return (
    <Button className={classes.button} variant="contained" onClick={props.onClick}>{props.text}</Button>)
}

export default PrimaryBtn;