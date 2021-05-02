import React from 'react'
import { Container, AppBar, Toolbar, Box, Button, Typography, Avatar, Badge } from '@material-ui/core'
import { ExitToApp } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import userImg from '../../../assets/images/avatar-4.jpg'
import pallet from '../../common/colors.js'

// component styling
const useStyles = makeStyles((theme) => ({
  topbar: { backgroundColor: pallet.white, boxShadow: "0 4px 3px -3px rgb(0, 0, 0, 0.12)" },
  logo: { flexGrow: 1, color: pallet.blue, fontWeight: 600 },
  toolbar: { padding: 0 },
  exitButton: {
    padding: "5px 20px",
    color: pallet.white,
    background: pallet.blue,
    borderRadius: 25,
    textTransform: "none",
    [theme.breakpoints.down('xs')]: { padding: "5px 12px" }, // breakpoint style for xs view
    '&:hover': {
      backgroundColor: pallet.blue
    }
  },
  Badge: {
    marginLeft: theme.spacing(3),
    [theme.breakpoints.down('xs')]: { marginLeft: theme.spacing(1) }, // breakpoint style for xs view
    '& span': {
      right: 6,
      border: "1px solid #fff",
      bottom: 6,
      background: pallet.green,
    }
  }
}))

// Header component
const Header = props => {
  const classes = useStyles()
  return (
    <AppBar className={classes.topbar}>
      <Container maxWidth="lg">
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.logo} variant="h4">blonk</Typography>
          <Box>
            <Button variant="contained" className={classes.exitButton} startIcon={<ExitToApp />}>S'identifier</Button>
            <Badge
              className={classes.Badge}
              color="secondary"
              variant="dot"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
            >
              <Avatar src={userImg} />
            </Badge>
          </Box>
        </Toolbar>
      </Container>
    </AppBar >
  )
}

export default Header