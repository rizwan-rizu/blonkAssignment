import React from 'react'
import { Box, Typography, Breadcrumbs, Paper, Divider, FormControl, OutlinedInput, InputAdornment, FormHelperText } from '@material-ui/core'
import Template from '../template'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import pallet from '../common/colors.js'
import PrimaryBtn from '../common/primaryBtn'
import Axios from 'axios'
import NotificationSnackbar from '../common/snackbar'

// component styling
const useStyle = makeStyles((theme) => ({
  breadcrumb: {
    backgroundColor: pallet.green100,
    padding: "8px 15px",
    borderRadius: 5,
    '& .MuiBreadcrumbs-separator': {
      color: pallet.white
    }
  },
  achorLink: {
    color: pallet.white,
    textDecoration: "none",
    outline: "none",
    fontSize: 14
  },
  fontweight600: { fontWeight: 600 },
  fieldLabel: { fontWeight: 600, paddingBottom: theme.spacing(1) },
  visibilityIcon: { width: 18, cursor: "pointer" }
}))

// Password reset component
const RestPassword = (props) => {
  const classes = useStyle()
  const [user, setuser] = React.useState(null)
  const [snackbar, setsnackbar] = React.useState({
    open: false,
    message: ''
  })
  const [value, setvalue] = React.useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    showCurrentPassword: false,
    showNewPassword: false,
    showConfirmPassword: false,
  })

  // state for form fields error
  const [error, seterror] = React.useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false
  })

  // handler for snackbar
  const closeSnackbar = () => setsnackbar({ ...snackbar, open: false, message: '' })
  const showSnackbar = (severity, message) => setsnackbar({ ...snackbar, open: true, message: message })

  React.useEffect(() => {
    // Api to get user from backend
    Axios.get(`${process.env.REACT_APP_API_BASE_URL}/users`).then(res => {
      if (res.data.success) setuser(res.data.user)
      else console.log(res.data.message)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  // form fields array of json
  const formFields = [
    { label: "Current password", name: "currentPassword", visibility: "showCurrentPassword" },
    { label: "New password", name: "newPassword", visibility: "showNewPassword" },
    { label: "Reapeat new password", name: "confirmPassword", visibility: "showConfirmPassword" }
  ]

  // handlchange function that will handle values for all the fields and will validate
  const handleChange = (prop) => (event) => {
    if (event.target.value) {
      setvalue({ ...value, [prop]: event.target.value })
      validateField(prop, event.target.value)
    } else {
      setvalue({ ...value, [prop]: event.target.value })
      seterror({ ...error, [prop]: false })
    }
  }

  // custom field validation handler
  const validateField = (fieldName, fieldValue) => {
    switch (fieldName) {
      case "currentPassword":
        if (user.password !== fieldValue) seterror({ ...error, [fieldName]: true })
        else seterror({ ...error, [fieldName]: false })
        break
      case "newPassword":
        if (fieldValue.length < 6) seterror({ ...error, [fieldName]: true })
        else seterror({ ...error, [fieldName]: false })
        break
      case "confirmPassword":
        if (fieldValue !== value["newPassword"]) seterror({ ...error, [fieldName]: true })
        else seterror({ ...error, [fieldName]: false })
        break
      default: break
    }
  }

  // function that will handle password visibility for all the fields
  const handleClickShowPassword = (prop) => (event) => {
    event.preventDefault()
    setvalue({ ...value, [prop]: !value[prop] })
  }

  // Errors to show based on the field
  const showFieldError = (field) => {
    switch (field) {
      case "currentPassword":
        return "current password didn't match."
      case "newPassword":
        return "password must be atleast 6 character."
      case "confirmPassword":
        return "password didn't match."
      default:
        return
    }
  }

  const handleFormSubmit = () => {
    if (!error.currentPassword && !error.newPassword && !error.confirmPassword && value.newPassword && value.confirmPassword && value.currentPassword) {
      const body = { password: value.newPassword }
      Axios.post(`${process.env.REACT_APP_API_BASE_URL}/users/update-password`, body).then(res => {
        if (res.data.success) {
          setuser(res.data.user)
          setvalue({ ...value, currentPassword: '', newPassword: '', confirmPassword: '' })
          showSnackbar("success", res.data.message)
        } else {
          showSnackbar("error", res.data.message)
        }
      }).catch(err => {
        showSnackbar("error", "sorry, your request cannot be processed at the moment.")
      })
    } else {
      showSnackbar("error", "Form is not complete.")
    }
  }

  // body function that will render inside template component by sending as a prop
  const body = () => (
    <Box>
      <Box pb={5} display="flex" alignItems="center" justifyContent="space-between">
        <Typography className={classes.fontweight600} variant="h6">My profile</Typography>
        <Box className={classes.breadcrumb}>
          <Breadcrumbs separator="›">
            <Link className={classes.achorLink} to="#">Home</Link>
            <Link className={classes.achorLink} to="#">My profile</Link>
          </Breadcrumbs>
        </Box>
      </Box>
      <Paper elevation={3}>
        <Box p={2}>
          <Typography className={classes.fontweight600} variant="body2">{`Password & Security`}</Typography>
        </Box>
        <Divider orientation="horizontal" />
        <Box px={2} pt={2} pb={5} display="flex" justifyContent="space-between" flexWrap="wrap">
          {formFields.map((item, idx) => ( //mapping form fields array of json
            <Box key={idx} flexGrow={1} pr={3} pt={1}>
              <Typography className={classes.fieldLabel} variant="body2">{item.label}</Typography>
              <FormControl className={`${classes.margin} ${classes.textField}`} size="small" variant="outlined" error fullWidth>
                <OutlinedInput
                  type={value[item.visibility] ? 'text' : 'password'}
                  value={value[item.name]}
                  placeholder="password"
                  onChange={handleChange(item.name)}
                  error={error[item.name]}
                  endAdornment={
                    <InputAdornment position="end">
                      {value[item.visibility] ?
                        <Visibility
                          className={classes.visibilityIcon}
                          onClick={handleClickShowPassword(item.visibility)}
                        />
                        :
                        <VisibilityOff
                          className={classes.visibilityIcon}
                          onClick={handleClickShowPassword(item.visibility)}
                        />
                      }
                    </InputAdornment>
                  }
                />
                {error[item.name] && // helper text to show field errors
                  <FormHelperText>{showFieldError(item.name)}</FormHelperText>
                }
              </FormControl>
            </Box>
          ))}
        </Box>
      </Paper>
      <Box mt={2}>
        <PrimaryBtn text="Save changes" onClick={handleFormSubmit} />
      </Box>
      {snackbar.open && //snackbar to show message
        <NotificationSnackbar open={snackbar.open} close={closeSnackbar} message={snackbar.message} />
      }
    </Box>
  )

  return (
    <Template body={body()} />
  )
}

export default RestPassword