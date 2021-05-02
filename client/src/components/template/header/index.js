import React from 'react'
import { Container, AppBar, Toolbar, Box, Menu, Drawer, Divider, List, ListItem, ListItemText, ListItemIcon, Typography, Avatar, Badge, Hidden, IconButton, MenuItem } from '@material-ui/core'
import { ExitToApp, Link } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu';
import userImg from '../../../assets/images/avatar-4.jpg'
import pallet from '../../common/colors.js'
import PrimaryBtn from '../../common/primaryBtn'

// component styling
const useStyles = makeStyles((theme) => ({
  topbar: { backgroundColor: pallet.white, boxShadow: "0 4px 3px -3px rgb(0, 0, 0, 0.12)" },
  logo: { flexGrow: 1, color: pallet.blue, fontWeight: 600 },
  toolbar: { padding: 0 },
  list: { width: 250 },
  profileDropdown: { cursor: "pointer" },
  Badge: {
    marginLeft: theme.spacing(3),
    [theme.breakpoints.down('xs')]: { marginLeft: theme.spacing(1) }, // breakpoint style for xs view
    '& span': {
      right: 6,
      width: 9,
      height: 9,
      border: "2px solid #fff",
      bottom: 6,
      background: pallet.green,
    }
  }
}))

// Header component
const Header = props => {
  const classes = useStyles()
  const [isProfileDropdown, setisProfileDropdown] = React.useState(null)
  const [openDrawer, setopenDrawer] = React.useState(false)
  const toggleDrawer = () => setopenDrawer(false)

  const profileDropdownClick = event => setisProfileDropdown(event.currentTarget)
  const profileDropdownClose = () => setisProfileDropdown(null)

  return (
    <AppBar className={classes.topbar}>
      <Container maxWidth="lg">
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.logo} variant="h4">blonk</Typography>
          {/* header content that will get hide in xs view and will show in all views above xs*/}
          <Hidden xsDown>
            <Box>
              <PrimaryBtn text="S'identifier" startIcon={<ExitToApp />} />
              <Badge
                className={classes.Badge}
                variant="dot"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              >
                <Avatar className={classes.profileDropdown} src={userImg} onClick={profileDropdownClick} />
              </Badge>
              {/* profile drop menu options list */}
              <Menu
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                transformOrigin={{ vertical: "top", horizontal: "center" }}
                id="profile-dropdown"
                anchorEl={isProfileDropdown}
                open={Boolean(isProfileDropdown)}
                onClose={profileDropdownClose}
                keepMounted
              >
                <MenuItem onClick={profileDropdownClose}>Option One</MenuItem>
                <MenuItem onClick={profileDropdownClose}>Option Two</MenuItem>
                <MenuItem onClick={profileDropdownClose}>Option Three</MenuItem>
              </Menu>
            </Box>
          </Hidden>
          {/* hamburger icon that will be visible in xs view and will get hide in all view above xs */}
          <Hidden smUp>
            <IconButton color="default" onClick={() => setopenDrawer(true)}><MenuIcon /></IconButton>
          </Hidden>
          {/* Drawer that will only show in xs view */}
          <Drawer anchor='right' open={openDrawer} onClose={toggleDrawer}>
            <Box className={classes.list} onClick={toggleDrawer} >
              <List>
                {['Option One', 'Option Two', 'Option Three'].map((text, idx) => ( // maping dummy navigation list
                  <ListItem button key={idx}>
                    <ListItemIcon><Link /></ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
              <Box py={2} textAlign="center"><PrimaryBtn text="S'identifier" startIcon={<ExitToApp />} /></Box>
              <Divider />
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar >
  )
}

export default Header