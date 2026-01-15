// this is the best place to add bootstrap link - ensure it is on the top of the file ahead of App.css
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavbarComponent from './components/NavbarComponent'
import Header from './components/Header'
import Container from 'react-bootstrap/Container'


function App() {
  return (
    <>
    <NavbarComponent />
    <Container className='text-center mt-5 mb-3'>
       <Header />
    </Container>
    </>
  )
}

export default App
