// this is the best place to add bootstrap link - ensure it is on the top of the file ahead of App.css
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavbarComponent from './components/NavbarComponent'

function App() {
  return (
    <>
       <NavbarComponent />
    </>
  )
}

export default App
