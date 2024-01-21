import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Journal from './pages/Journal/Journal';
import About from './pages/About/About';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='journal' element={<Journal />} />
        <Route path='about' element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
