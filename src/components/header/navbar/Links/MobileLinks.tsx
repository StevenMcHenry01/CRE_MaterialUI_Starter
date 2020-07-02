// 3rd party imports
import * as React from 'react'
import { Typography, Divider, useTheme } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

// My imports

const MobileLinks = ({ handleDrawerToggle }: any) => {
  const theme = useTheme()

  const MobileLinkStyle = {
    textDecoration: 'none',
    color: theme.palette.switchable.mobileLinkText,
  }

  return (
    <ul>
      <ListItemStyled onClick={handleDrawerToggle}>
        <NavLink style={MobileLinkStyle} to='/'>
          <Typography style={{textAlign: 'center'}}>Home</Typography>
        </NavLink>
      </ListItemStyled>
      <Divider />
      <ListItemStyled onClick={handleDrawerToggle}>
        <NavLink style={MobileLinkStyle} to='/otherPage'>
          <Typography style={{textAlign: 'center'}}>Other Page</Typography>
        </NavLink>
      </ListItemStyled>
    </ul>
  )
}

export default MobileLinks

// STYLING
const ListItemStyled = styled.li`
  text-decoration: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 1rem 0;
`
