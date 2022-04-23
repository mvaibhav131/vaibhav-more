import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Google from '../component/Google'
import SignIn from '../component/SignIn'
import SignUp from '../component/SignUp'

const Login = () => {
  const navigate=useNavigate();
  return  (
   <h1>
    <button onClick={()=>navigate("signin")}>SignIn</button>
    <button onClick={()=>navigate("signus")}>SignOut</button>
    <button onClick={()=>navigate("google")}>Login Google</button>

  <div>
    <Routes> 
      <Route path="signin" element={<SignIn/>} />
      <Route path="signus" element={<SignUp/>} />
      <Route path="google" element={<Google/>} />
    </Routes>
    
  </div>
  </h1>
  );
}

export default Login
