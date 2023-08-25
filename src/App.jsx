import { useState } from 'react'
import './App.css'
import { Container } from './components/Container.styled'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <h1>Root Page</h1>
    </Container>
  )
}

export default App
