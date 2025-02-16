import React from 'react'
import Navbar from '../components/Navbar.js'
import Announcement from '../components/Announcement.js'
import Slider from '../components/Slider.js'
import Categories from '../components/Categories.js'
import Products from '../components/Products.js'
import Newsletter from '../components/Newsletter.js'
import Footer from '../components/Footer.js'
import {  Routes,Route,NavLink,Navigate } from 'react-router-dom'
import Register from './Register.js'
import ProductList from './ProductList.js'
import Product from './Product.js'
import Cart from './Cart.js'
import Login from './Login.js'


const Home = () => {
  return (
    <div className="">
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Categories />
        <Products />
        <Newsletter/>
        <Footer />
        
    </div>
  )
}

export default Home

