import React from 'react'
import { FormControl, OutlinedInput, InputAdornment, FormHelperText, InputLabel } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

// component styling
const useStyle = makeStyles((theme) => ({
  visibilityIcon: { width: theme.spacing(2), cursor: "pointer" }
}))

// password field component
function PasswordField(props) {
  const classes = useStyle()
  return (
    <FormControl size="small" variant="outlined" error={props.error} fullWidth>
      <InputLabel htmlFor={props.id}>Password</InputLabel>
      <OutlinedInput
        id={props.id}
        label="password"
        type={props.visibility ? 'text' : 'password'}
        value={props.value}
        placeholder="password"
        onChange={props.onChange}
        error={props.error}
        endAdornment={
          <InputAdornment position="end">
            {props.visibility ? // check for password visibility icon
              <Visibility
                className={classes.visibilityIcon}
                onClick={props.onVisibilityClick}
              />
              :
              <VisibilityOff
                className={classes.visibilityIcon}
                onClick={props.onVisibilityClick}
              />
            }
          </InputAdornment>
        }
      />
      {props.error && // helper text to show field errors
        <FormHelperText>{props.fieldError}</FormHelperText>
      }
    </FormControl>
  )
}

export default PasswordField