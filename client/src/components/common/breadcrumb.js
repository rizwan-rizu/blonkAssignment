import React from 'react';
import { Breadcrumbs, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import pallet from '../common/colors'

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
}))

// Breadcrumb component
function BreadcrumbComponent(props) {
  const classes = useStyle()
  return (
    <Box className={classes.breadcrumb}>
      <Breadcrumbs separator="›">
        {props.data.map((item, idx) => ( // mapping data which have sent here as props
          <Link key={idx} className={classes.achorLink} to={item.link}>{item.name}</Link>
        ))}
      </Breadcrumbs>
    </Box>
  );
}

export default BreadcrumbComponent;