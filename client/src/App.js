import logo from './logo.svg'
import './App.css'
import Home from './pages/Home'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Container className='mt-4'>
      <Home />
    </Container>
  )
}

export default App
