import React, { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Cocktails from './Components/Cocktails';
import Cocktaildetails from './Components/Cocktaildetails';
import PrivateRoute from './PrivateRoute';
import Home from './Components/Home';
import Login from './Components/Login';

export const WrapperContext = createContext();

export default function App() {
  const [searchFormValue, setSearchFormValue] = useState("")
  const [isLogin, setIsLogin] = useState(false)

  return (
    <>
      <WrapperContext.Provider value={{
        searchFormValue, setSearchFormValue, isLogin, setIsLogin
      }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Cocktails" element={<PrivateRoute><Cocktails /></PrivateRoute>}></Route>
          <Route path="/Cocktails/:id" element={<Cocktaildetails />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="*" element={<h2>Page not Found</h2>}></Route>
        </Routes>
      </WrapperContext.Provider>
    </>
  )
}
