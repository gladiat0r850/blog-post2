import {motion} from 'framer-motion'
import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function Prices({title, price, offers}) {
  return <motion.div 
  initial={{opacity: 0, y: 50}}
  whileInView={{opacity: 1, y: 0}}
  transition={{duration: 0.670, ease: 'backInOut'}}
  viewport={{once: true}}
  className="flex flex-col w-screen">
    <div className="flex items-center justify-center w-[80%] sm:h-16 sm:w-96 bg-black rounded-tl-2xl rounded-tr-2xl">
        <h1 className="text-4xl text-white">{title}</h1>
    </div>
    <div className="flex bg-[#242424] h-[750px] sm:h-[650px] sm:w-96 w-[80%] border-[3px] justify-around items-center flex-col border-black">
        <h1 className='text-6xl font-bold text-white'>{price}$</h1>
        <div className="flex flex-col gap-20">
            <div className="text-white justify-center w-max flex flex-col">
            {offers.map(item => {return <li className='list-none text-xl'>{item}</li>})}
            <button class="bg-white text-black text-3xl rounded-xl h-14 w-[80%] mt-14 ml-7 duration-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-rose-500 hover:text-white"><Link to='/OrderProduct.jsx'>Order plan</Link></button>
            </div>
        </div>
    </div>
  </motion.div>
}

export default Prices