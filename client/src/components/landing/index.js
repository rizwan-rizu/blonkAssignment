import React from 'react';
import { Box } from '@material-ui/core';
import Template from '../template';

function Landing(props) {

  const body = () => (
    <Box display="flex" alignItems="center" justifyContent="center">
      This is the landing page
    </Box>
  )

  return (
    <Template body={body()} />
  );
}

export default Landing;