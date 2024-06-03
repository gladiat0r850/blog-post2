import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import Navbar from './navbar';
import { Link, Route, Routes } from 'react-router-dom'
import Home from './home.jsx'
import { FaGithub, FaYoutube } from 'react-icons/fa';
import { SiRoblox } from "react-icons/si";
import OrderProduct from './OrderProduct.jsx';
import Blog from './Blog.jsx';

function App() {
  const date = new Date
  const year = date.getFullYear()
  return (
    <>
      <body className="bg-gradient-to-r from-black to-[#252525] min-h-screen w-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/OrderProduct.jsx' element={<OrderProduct />}></Route>
          <Route path='/Blog.jsx' element={<Blog />}></Route>
        </Routes>
        <div className="flex-grow mt-72 sm:mt-60"></div>
        <div className="bg-[#242424] text-white justify-around">
          <div className="mx-auto py-8 px-4">
            <div className="flex justify-evenly w-screen items-center gap-24">
              <Link to='/' className='text-5xl text-white font-bold transition-all duration-300 hover:text-red-600'>X3NO</Link>
              <div className="flex gap-4">
                <a href="https://github.com/SirCmpwn" className='text-3xl transition-all duration-300 hover:text-red-600' target="_blank"><FaGithub /></a>
                <a href="https://www.youtube.com/channel/UCyqr6VJL9f7UzQH41RhZtPw"><FaYoutube className='text-3xl transition-all duration-300 hover:text-red-600' /></a>
                <a href="https://www.roblox.com/users/3322841976/profile"><SiRoblox className='text-3xl transition-all duration-300 hover:text-red-600' /></a>
              </div>
            </div>
            <div className="mt-4 text-center">
              <h1 className='text-white'>©{year} Copyright All Rights Reserved</h1>
            </div>
          </div>
        </div>
      
      </body>
    </>
  );
}

export default App;
