
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Careers from './components/Careers'
import About from './components/About'
import ContactUs from './components/ContactUs'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Home />
        <Careers />
        <About />
        <ContactUs />


      </BrowserRouter>

    </>

  )
}

export default App
