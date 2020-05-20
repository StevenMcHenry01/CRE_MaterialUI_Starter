import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import styled from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import '../../styles/standardInject.scss'
import { Paper } from '@material-ui/core'

const TopLayout = ({ children }) => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <AppWrapper square>{children}</AppWrapper>
    </BrowserRouter>
  )
}

// STYLING
const AppWrapper = styled(Paper)`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export default TopLayout
