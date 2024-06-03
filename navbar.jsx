import React, { useState } from 'react'
import {AnimatePresence, motion, useScroll} from 'framer-motion'
import {Link, Route, Routes} from 'react-router-dom'
import Design from './OrderProduct'
import { FaBars, FaHome, FaQuestion } from "react-icons/fa";
import './App.css'
import { RiComputerFill } from "react-icons/ri";
import { GiBrain } from "react-icons/gi";
import { MdOutlineQuestionMark } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { FaGithub, FaYoutube } from 'react-icons/fa';
import { SiRoblox } from "react-icons/si";

function Navbar() {
    const navClass = 'text-xl text-[#C0C0C0] text-center transition-all hover:text-white text'
    const [state, setState] = useState(false)
    const [state2, setState2] = useState(true)

  return <>
    <div className='flex justify-around items-center'>
      <Link to='/' className='text-5xl text-white font-extrabold transition-all duration-300 hover:text-red-600 hidden sm:block'>X3NO</Link>
    <div className="flex items-center gap-20 justify-center h-20 w-3/4">
        <div className='text h-8 rounded-[15px] w-40 bg-[#333333] text-center items-center transition-all hover:scale-[1.07]'><Link className={navClass} to='./design.jsx'>Web Design</Link></div>
        <div className="text h-8 rounded-[15px] w-40 bg-[#333333] text-center items-center transition-all hover:scale-[1.07]"><Link className={navClass} to='./'>Web functionality</Link></div>
        <div className='text h-8 rounded-[15px] w-40 bg-[#333333] text-center items-center transition-all hover:scale-[1.07]'><Link className={navClass} to='./Blog.jsx'>Blog</Link></div>
        <div className='text h-8 rounded-[15px] w-40 bg-[#333333] text-center items-center transition-all hover:scale-[1.07]'><Link className={navClass} to='./'>Why us?</Link></div>
        <div className="flex flex-col gap-1 items-center">
        {state2 && <div onClick={() => {setState(!state), setState2(!state2)}} className="hidden items-center justify-center  bg-[#333333] h-20 w-20 rounded-xl translate-y-[30px] q">
            <FaBars className='text-white text-5xl' />
        </div>}
        <div className="hidden gap-5 sm:flex">
          <a href="https://github.com/SirCmpwn" className='text-3xl transition-all duration-300 text-white hover:text-red-600' target="_blank"><FaGithub /></a>
          <a href="https://www.youtube.com/channel/UCyqr6VJL9f7UzQH41RhZtPw" target="_blank"><FaYoutube  className='text-3xl text-white transition-all duration-300 hover:text-red-600' /></a>
          <a href="https://www.roblox.com/users/3322841976/profile" target="_blank"><SiRoblox className='text-3xl text-white transition-all duration-300 hover:text-red-600' /></a>
      </div>
        <AnimatePresence>
        {state && <motion.div initial={{y: 15, opacity: 0}} animate={{y: 0, opacity:1}} exit={{y: 15, opacity: 0 }} transition={{duration: 0.4, ease: `backInOut`}} className='h-[500px] z-10 bg-[#242424] w-screen absolute rounded-2xl'>
          <RxCross1 className='text-white text-5xl mt-3 ml-3' onClick={() => {setState(false), setState2(true)}} />
          <div className="flex gap-5 items-center justify-center flex-col h-[75%]">
        <div className="flex text-white text-5xl gap-10 border-b-[1px] w-[75%]">
              <FaHome />
              <Link to='/' className='text-3xl'>Home</Link>
            </div>
            <div className="flex text-white text-5xl gap-10 w-[75%] border-b-[1px]">
              <RiComputerFill />
              <Link to='/' className='text-3xl'>Design</Link>
            </div>
            <div className="flex text-white text-5xl gap-10 w-3/4 border-b-[1px]">
              <GiBrain />
              <Link to='/Blog.jsx' className='text-3xl'>Blog</Link>
            </div>
            <div className="flex text-white text-5xl gap-10 w-3/4 border-b-[1px]">
              <MdOutlineQuestionMark />
              <h1 className='text-3xl'>Why us</h1>
            </div>
            </div>
        </motion.div>}
        </AnimatePresence>
        </div>
    </div>
</div>
  </>
}

export default Navbar