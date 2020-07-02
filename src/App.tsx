// third party imports
import * as React from 'react'
import {useState} from 'react'
import styled from 'styled-components'
import { ThemeProvider } from '@material-ui/core/styles'

// my imports
import TopLayout from './components/wrappers/TopLayout'
import Navbar from './components/header/navbar/Navbar'
import { Routes } from './Routes'
import { lightTheme, darkTheme } from './styles/theme'

function App() {
  const [lightThemeActivated, setLightThemeActivated] = useState(true)

  const toggleTheme = () => {
    setLightThemeActivated(!lightThemeActivated)
  }

  // ~ COMPONENT
  return (
    <ThemeProvider theme={lightThemeActivated ? lightTheme : darkTheme}>
      <TopLayout>
        <Navbar
          toggleTheme={toggleTheme}
          lightThemeActivated={lightThemeActivated}
        />
        <div style={{width: '100%'}}>
          <MainContentContainerStyled>
            <Routes />
          </MainContentContainerStyled>
        </div>
      </TopLayout>
    </ThemeProvider>
  )
}

export default App

// STYLING
const MainContentContainerStyled = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 2rem 1rem;
`
