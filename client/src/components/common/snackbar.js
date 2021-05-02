import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

// Snackbar component
export default function NotificationSnackbar(props) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}
      open={props.open}
      autoHideDuration={3000}
      onClose={props.close}
      message={props.message}
      action={
        <IconButton size="small" aria-label="close" color="inherit" onClick={props.close}>
          <CloseIcon fontSize="small" />
        </IconButton>
      }
    />
  )
}