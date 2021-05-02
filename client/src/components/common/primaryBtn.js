import React from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import pallet from './colors.js'

// component styling
const useStyle = makeStyles((theme) => ({
  button: {
    padding: "6px 20px",
    backgroundColor: pallet.blue,
    color: pallet.white,
    textTransform: "none",
    borderRadius: 25,
    '&:hover': {
      backgroundColor: pallet.blue
    }
  }
}))

// Primary button component
const PrimaryBtn = (props) => {
  const classes = useStyle()
  return (
    <Button
      className={classes.button}
      variant="contained"
      onClick={props.onClick}
      startIcon={props.startIcon ?? false}
      endIcon={props.endIcon ?? false}
    >
      {props.text}
    </Button>)
}

export default PrimaryBtn;