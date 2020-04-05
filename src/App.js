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

  const FlexContainer = styled.div`
    display: flex;
    background: ${theme.palette.grey[200]};
    flex-wrap: wrap;
  `

  const BoxFlex = styled.div`
    /* margin: 0 1rem; */
    height: 150px;
    flex-basis: 300px;
    flex-grow: 1;
    &.one {
      background: ${theme.palette.warning.main};
    }
    &.two {
      background: ${theme.palette.primary.main};
    }
    &.three {
      background: green;
    }
  `

  // ~ COMPONENT
  return (
    <TopLayout>
      <MainContentContainerStyled maxWidth='sm'>
        <FlexContainer>
          <BoxFlex className='one'></BoxFlex>
          <BoxFlex className='two'></BoxFlex>
          <BoxFlex className='three'></BoxFlex>
        </FlexContainer>
      </MainContentContainerStyled>
    </TopLayout>
  )
}

export default App
