
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import FocusArea from './pages/FocusArea';
import Initiatives from './pages/Initiatives';
import Gallery from './pages/Gallery';

function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/focus-area' element={<FocusArea/>} />
          <Route path='/initiative' element={<Initiatives/>} />
          <Route path='/gallery' element={<Gallery/>} />
      </Routes>
    </>
  )
}

export default App
