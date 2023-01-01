import './App.css';
import {Link} from "react-router-dom";
import { Sidebar } from 'react-pro-sidebar';
import Slidebar from './componnets/Slidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './componnets/Pages/Home';
import About from './componnets/Pages/About';
import Navbar from './componnets/Navbar';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <div className='d-flex'>
    <Slidebar/>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </div>
    </BrowserRouter>
   
    </div>
  );
}

export default App;
