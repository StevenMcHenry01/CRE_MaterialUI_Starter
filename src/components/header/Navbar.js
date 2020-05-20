// 3rd party imports
import React, { useState } from 'react'
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
  TopAppBarFixedAdjust,
  TopAppBarActionItem,
} from '@rmwc/top-app-bar'
import '@rmwc/top-app-bar/styles'
import { NavLink } from 'react-router-dom'
import {
  Typography,
  useTheme,
  Fab,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core'
import styled from 'styled-components'
import HighlightIcon from '@material-ui/icons/Highlight'
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects'
import MenuIcon from '@material-ui/icons/Menu'
import { useWindowWidth } from '@react-hook/window-size'
import { Drawer, Divider } from '@material-ui/core'

// My imports

const NavLinkActive = ({ children, to }) => (
  <NavLinkStyled
    exact
    activeStyle={{
      textDecoration: 'none',
      borderBottom: '1px solid #c03535',
      paddingBottom: '3px',
    }}
    to={to}
  >
    {children}
  </NavLinkStyled>
)

const Navbar = ({ toggleTheme, lightThemeActivated }) => {
  const theme = useTheme()
  const windowWidth = useWindowWidth({ wait: 75 })

  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen)
  }

  return (
    <React.Fragment>
      <TopAppBar style={{ backgroundColor: '#262626' }}>
        <TopAppBarRow>
          <TopAppBarSection>
            <TopAppBarTitle>
              <Typography
                variant='h4'
                style={{ color: theme.palette.grey[400] }}
              >
                Site Title
              </Typography>
            </TopAppBarTitle>
          </TopAppBarSection>
          <TopAppBarSection alignEnd>
            <ButtonStyled onClick={toggleTheme}>
              {lightThemeActivated ? (
                <HighlightIcon style={{ color: theme.palette.grey[400] }} />
              ) : (
                <EmojiObjectsIcon style={{ color: theme.palette.grey[400] }} />
              )}
            </ButtonStyled>
            {windowWidth > theme.breakpoints.values.sm && (
              <>
                <NavLinkActive
                  style={{ color: theme.palette.grey[400] }}
                  to='/'
                >
                  <Typography>Home</Typography>
                </NavLinkActive>
                <NavLinkActive
                  style={{ color: theme.palette.grey[400] }}
                  to='/otherPage'
                >
                  <Typography>Other Page</Typography>
                </NavLinkActive>
              </>
            )}
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
      <TopAppBarFixedAdjust />
      {windowWidth <= theme.breakpoints.values.sm && (
        <>
          <FabStyled
            style={{
              backgroundColor: theme.palette.switchable.menuButtonBackground,
            }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon
              style={{ color: theme.palette.switchable.menuButtonIcon }}
            />
          </FabStyled>
          <Drawer
            anchor='bottom'
            open={drawerOpen}
            onClose={handleDrawerToggle}
          >
            <List>
              <ListItem
                style={{
                  justifyContent: 'center',
                  cursor: 'pointer',
                  margin: '1rem 0',
                }}
                onClick={handleDrawerToggle}
              >
                <NavLink
                  style={{
                    textDecoration: 'none',
                    color: theme.palette.grey[700],
                  }}
                  to='/'
                >
                  <Typography>Home</Typography>
                </NavLink>
              </ListItem>
              <Divider />
              <ListItem
                style={{
                  justifyContent: 'center',
                  cursor: 'pointer',
                  margin: '1rem 0',
                }}
                onClick={handleDrawerToggle}
              >
                <NavLink
                  style={{
                    textDecoration: 'none',
                    color: theme.palette.grey[700],
                  }}
                  to='/otherPage'
                >
                  <Typography>Other Page</Typography>
                </NavLink>
              </ListItem>
            </List>
          </Drawer>
        </>
      )}
    </React.Fragment>
  )
}

export default Navbar

// STYLING
const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: white;
  margin: 0 0.75rem;
`

const ButtonStyled = styled.button`
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
`

const FabStyled = styled(Fab)`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
`
