
import { Routes, useNavigate } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Navbar from './component/Navbar';
import './App.css';
import { useEffect } from 'react';
import Counter from './pages/Counter';
import Products from './pages/Products';

function App() {
  const navigate=useNavigate();
useEffect(()=>{
  navigate("/home")
},[])



  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="home" element={<Home />}/>
      <Route path="login/*" element={<Login/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="counter/:initialCount" element={<Counter/>}/>
      <Route path="products/*" element={<Products/>} />
      </Routes>
     
      
    </div>
  );
}

export default App;
