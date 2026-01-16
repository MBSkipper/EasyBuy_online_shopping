// this is the best place to add bootstrap link - ensure it is on the top of the file ahead of App.css
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavbarComponent from './components/NavbarComponent'
import LandingPage from './pages/LandingPage.jsx'
import CartPage from './pages/CartPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import Container from 'react-bootstrap/Container'
import { BrowserRouter, Routes, Route } from "react-router";


function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />

      <Container className='text-center mt-5 mb-3'>    
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>

      </Container>
    </BrowserRouter>
  )
}

export default App
