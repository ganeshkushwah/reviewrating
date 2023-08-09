import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'




const Roue = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<UserSignup/>}>
            <Route path='/UserLogin' element={<UserLogin/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Roue;
