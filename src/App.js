import React from 'react'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import {  Routes,Route,NavLink,Navigate } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Routes>
        {/* route for Home component */}
        {/* to load home page automatically path is / */}
        <Route path="/" element={<Home />} ></Route>
         {/* route for Users component */}
         <Route path="/register" element={<Register />} ></Route>
          {/* route for Contactus component */}
        <Route path="/login" element={<Login />} ></Route>
        {/* route for registration component */}
        <Route path="/product" element={<Product />}></Route>
         {/* route for Technologies component */}
         <Route path="/productlist" element={<ProductList />} ></Route>
         <Route path="/cart" element={<Cart />} />
         </Routes>
      
      </div>
  )
}

export default App