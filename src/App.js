import React from 'react'
import TopLayout from './components/Layout'
import { Container, useTheme } from '@material-ui/core'
import styled from 'styled-components'

function App() {
  const theme = useTheme()

  // STYLING

  const MainContentContainerStyled = styled(Container)`
    padding: 2rem 0;
  `

  // ~ COMPONENT
  return (
    <TopLayout>
      <MainContentContainerStyled maxWidth='sm'>
        <div>Hello</div>
      </MainContentContainerStyled>
    </TopLayout>
  )
}

export default App
