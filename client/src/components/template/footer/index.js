import React from 'react'
import { Box, Container, Typography, MenuItem, Menu, Divider, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import pallet from '../../common/colors'
import applePlayButton from '../../../assets/images/apple.svg'
import googlePlayButton from '../../../assets/images/google.svg'
import { ArrowDropDown, Facebook, Instagram, LinkedIn, Twitter } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  footer: { backgroundColor: pallet.black100, color: pallet.gray400 },
  socialIconContainer: {
    [theme.breakpoints.down('xs')]: { padding: `0 8px` },
    padding: `0 24px`
  },
  socialIcon: {
    [theme.breakpoints.down('xs')]: { width: theme.spacing(2) },
    width: theme.spacing(2.25),
    cursor: "pointer"
  },
  divider: { background: pallet.gray100 },
  formControl: {
    margin: theme.spacing(1),
    minWidth: theme.spacing(15),
  },
  languageMenu: {
    backgroundColor: pallet.gray200,
    border: `1px solid ${pallet.gray300}`,
    color: pallet.gray300,
    textTransform: "none",
    padding: "4px 10px",
    '&:hover': {
      backgroundColor: pallet.gray200
    }
  },
  weightedText: { color: pallet.gray300 },
  smText: { fontSize: 12 },
  playStoreBtn: { width: 150, cursor: "pointer" }
}))

// Footer component
const Footer = props => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [language, setlanguage] = React.useState("English")

  const handleClick = (event) => setAnchorEl(event.currentTarget)
  const handleLanguage = (value) => {
    setlanguage(value)
    setAnchorEl(null)
  }
  const handleClose = () => setAnchorEl(null)

  return (
    <Box className={classes.footer}>
      <Container maxWidth="lg">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box flexGrow={1} py={1.5}>
            <Typography variant="h4">blonk</Typography>
          </Box>
          <Divider className={classes.divider} orientation="vertical" flexItem />
          <Box display="flex" alignItems="center" >
            <Box className={classes.socialIconContainer} display="flex" alignItems="center">
              <Box pr={1}><Facebook className={classes.socialIcon} /></Box>
              <Box pr={1}><Twitter className={classes.socialIcon} /></Box>
              <Box pr={1}><LinkedIn className={classes.socialIcon} /></Box>
              <Box><Instagram className={classes.socialIcon} /></Box>
            </Box>
          </Box>
          <Divider className={classes.divider} orientation="vertical" flexItem />
          <Box width={{ xs: 120, sm: 150 }} textAlign="center" >
            <Button variant="contained" className={classes.languageMenu} onClick={handleClick} endIcon={<ArrowDropDown />}>
              {language}
            </Button>
            <Menu
              id="language"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => handleLanguage("English")}>English</MenuItem>
              <MenuItem onClick={() => handleLanguage("German")} >German</MenuItem>
              <MenuItem onClick={() => handleLanguage("Arabic")}>Arabic</MenuItem>
            </Menu>
          </Box>
        </Box >
      </Container >
      <Divider className={classes.divider} orientation="horizontal" />
      <Box py={5} textAlign="center">
        <Box pb={1.5}>
          <Typography variant="body2" className={classes.weightedText}>Telechargez I'application mobile blonk</Typography>
        </Box>
        <Box pb={1.5}>
          <Typography variant="body2" className={classes.smText}>Commencez a vous connector avec les gens et les emplois.</Typography>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center" flexWrap="wrap">
          <Box px={1}><img href="#" className={classes.playStoreBtn} src={applePlayButton} alt="Apple play button" /></Box>
          <Box px={1}><img href="#" className={classes.playStoreBtn} src={googlePlayButton} alt="google play button" /></Box>
        </Box>
      </Box>
      <Divider className={classes.divider} orientation="horizontal" />
      <Box py={2} textAlign="center">
        <Typography variant="body2" className={classes.smText} >
          <span className={classes.weightedText}>© Blonk Group 2021.</span> All rights reserved.
        </Typography>
      </Box>
    </Box >
  )
}

export default Footer