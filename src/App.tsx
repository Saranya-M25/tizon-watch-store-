import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Footer from './components/footer/Footer'
import Men from './components/men/Men'
import Women from './components/women/Women'
import Smart from './components/smart/Smart'
import Watches from './pages/watches/Watches'
import Features from './components/features/Features'
import Bestsellers from './components/bestseller/Bestseller'
import Cart from './components/cart/Cart'
import Learnmore from './components/learnmore/Learnmore'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/watches' element={<Watches />} />
        <Route path='/feature' element={<Features />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/men' element={<Men/>} />
        <Route path='/women' element={<Women />} />
        <Route path='/smart' element={<Smart />} />
        <Route path='/bestseller' element={<Bestsellers />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/learnmore' element={<Learnmore/>}/>
      </Routes>
    </>
  )
}

export default App
