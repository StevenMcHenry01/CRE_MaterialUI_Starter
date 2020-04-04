import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../../src/styles/theme'
import styled from 'styled-components'
import '../styles/standardInject.scss'

const TopLayout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppWrapper>
          {children}
        </AppWrapper>
      </ThemeProvider>
    </>
  )
}

// STYLING
const AppWrapper = styled.div`
  
`

export default TopLayout
