// 3rd party imports
import React from 'react'
import {
  Typography,
  List,
  ListItem,
  Divider,
  useTheme,
} from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

// My imports

const MobileLinks = ({ handleDrawerToggle }) => {
  const theme = useTheme()

  const MobileLinkStyle = {
    textDecoration: 'none',
    color: theme.palette.switchable.mobileLinkText,
  }

  return (
    <List>
      <ListItemStyled onClick={handleDrawerToggle}>
        <NavLink style={MobileLinkStyle} to='/'>
          <Typography>Home</Typography>
        </NavLink>
      </ListItemStyled>
      <Divider />
      <ListItemStyled onClick={handleDrawerToggle}>
        <NavLink style={MobileLinkStyle} to='/otherPage'>
          <Typography>Other Page</Typography>
        </NavLink>
      </ListItemStyled>
    </List>
  )
}

export default MobileLinks

// STYLING
const ListItemStyled = styled(ListItem)`
  justify-content: center;
  cursor: pointer;
  margin: 1rem 0;
`
