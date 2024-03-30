
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import FocusArea from './pages/FocusArea';
import Initiatives from './pages/Initiatives';

function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/focus-area' element={<FocusArea/>} />
          <Route path='/initiative' element={<Initiatives/>} />
      </Routes>
    </>
  )
}

export default App
