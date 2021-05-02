import React from 'react';
import Header from './header';
import Footer from './footer';
import { Box, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import pallet from '../common/colors.js'

// component styling
const useStyles = makeStyles((theme) => ({
  content: { paddingTop: theme.spacing(12), paddingBottom: theme.spacing(10), backgroundColor: pallet.gray },
}))

const Template = (props) => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Header />
      <Box className={classes.content}>
        <Container maxWidth="xl">
          {props.body}
        </Container>
      </Box>
      <Footer />
    </React.Fragment>
  );
}

export default Template;