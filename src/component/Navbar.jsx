import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate=useNavigate();
  return (
    <div style={{
        marginBottom:"10px",
        padding:"30px",
        backgroundColor:"pink",
        color:"white",
        fontSize:"30px",
        fontWeight:"600",
        display:"flex",
        gap:"20px"
    }}
    >
        <div>
            <Link to="/home">Home</Link>
        </div>
        <div>
            <button onClick={()=>navigate("login")}>Login</button>
        </div>
        <div>
            <Link to="about">About</Link>
        </div>
        {/* <div>
            <Link to="/counter">Counter</Link>
        </div>  */}
        <div>
            <Link to="/products">Products</Link>
        </div> 
     
    </div>
  )
}

export default Navbar
