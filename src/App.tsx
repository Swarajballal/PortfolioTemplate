
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import FocusArea from './pages/FocusArea';

function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/focus-area' element={<FocusArea/>} />
      </Routes>
    </>
  )
}

export default App
