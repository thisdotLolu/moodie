import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Features from './pages/Features';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';



function App() {
  const[open, setOpen]=useState(false)
  return (
    <div className="App">
     
      <Routes>
        <Route element={<Home
        open={open}
        setOpen={setOpen}
        />} path='/'/>
        <Route element={<SignUp/>} path='/signup'/>
        <Route element={<Login/>} path='/login'/>
        <Route element={<Features
        open={open}
        setOpen={setOpen}
        />} path='/features'/>
      </Routes>
    </div>
  );
}

export default App;
