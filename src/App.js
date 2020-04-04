import React from 'react'
import TopLayout from './components/Layout'
import Programmer from './components/Shape.so/Programmer'
import { Container, Box } from '@material-ui/core'

function App() {
  return (
    <TopLayout>
      <Container>
        <Box>
          <div>Hello</div>
          <Programmer />
        </Box>
      </Container>
    </TopLayout>
  )
}

export default App
