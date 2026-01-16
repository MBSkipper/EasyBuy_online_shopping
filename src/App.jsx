// this is the best place to add bootstrap link - ensure it is on the top of the file ahead of App.css
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavbarComponent from './components/NavbarComponent'
import LandingPage from './pages/LandingPage.jsx'
import CartPage from './pages/CartPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import Container from 'react-bootstrap/Container'
import { BrowserRouter, Routes, Route } from "react-router";
import { useState } from 'react';


function App() {
  const [cart,setCart] = useState([ ])

  function addToCart(productId) {
    setCart([...cart, productId])
  }
  {/*In the function addToCart above, the Cart cannot be updated directly, only by the handler so using the ...spread operator copies the existing contents of the Cart (array) and then adds the product id of the additional product selected */}

  return (
    <BrowserRouter>
      <NavbarComponent cart={cart} />

      <Container className='text-center my-5'>    
        <Routes>
          <Route 
            path="/" 
            element={
              <LandingPage 
              cart={cart}
              addToCart={addToCart} 
              />} 
            />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>

      </Container>
    </BrowserRouter>
  )
}

export default App
