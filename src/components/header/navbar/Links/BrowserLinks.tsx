// 3rd party imports
import React from 'react'
import { Typography } from '@material-ui/core'

// My imports
import BrowserLinkActive from './BrowserLinkActive'

const BrowserLinks = () => {
  return (
    <React.Fragment>
      <BrowserLinkActive to='/'>
        <Typography>Home</Typography>
      </BrowserLinkActive>
      <BrowserLinkActive to='/otherPage'>
        <Typography>Other Page</Typography>
      </BrowserLinkActive>
    </React.Fragment>
  )
}

export default BrowserLinks
