import './App.css'
import 'boxicons'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Journal from './pages/Journal/Journal';
import About from './pages/About/About';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {


  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='flex-1'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='journal' element={<Journal />} />
          <Route path='about' element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
