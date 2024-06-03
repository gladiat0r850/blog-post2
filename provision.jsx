import React, {useEffect, useRef} from 'react'
import { useInView } from 'framer-motion'
import {motion} from 'framer-motion'

function Provision({pc, phone, gear, braen}) {
  return <>
  <div className="flex flex-col gap-10">
  <motion.div  whileInView={{x: 0, opacity: 1}} initial={{x: -100, opacity: 0}} transition={{duration: 0.670, ease: 'backInOut'}} viewport={{once: true}} className="flex justify-start w-2/8 items-center flex-wrap text-center cb">
    <img src={pc} alt="COMPUTER" />
    <div className="flex flex-col gap-16">
    <h1 className='text-white text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-300'>Fast and robust user interface</h1>
    <div className='w-[350px] text-white'>X3NOBluetzz always provides it's customers with the fastest applications that use modern UI and latest technologies.</div></div>
  </motion.div>
  <motion.div whileInView={{x: 0, opacity: 1}} initial={{x: 100, opacity: 0}} transition={{duration: 0.670, ease: 'backInOut'}} viewport={{once: true}} className="flex justify-end w-2/8 items-center flex-wrap cb">
    <img src={phone} alt="COMPUTER" />
    <div className="flex flex-col gap-16">
    <h1 className='text-white text-3xl font-bold mr-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-300'>Device Compatibility</h1>
    <div className='w-[350px] text-white'>X3NOBluetzz is made up of developers who expertise in responsive design across all kinds of devices. We also make fast and beautiful mobile apps using React Native</div></div>
  </motion.div>
  <motion.div whileInView={{x: 0, opacity: 1}} initial={{x: -100, opacity: 0}} transition={{duration: 0.670, ease: 'backInOut'}} viewport={{once: true}} className="flex justify-start w-2/8 items-center flex-wrap gap-20 ml-10 sm:ml-0 cb">
    <img className='w-72 h-72 mr-20 sm:mr-0' src={gear} alt="COMPUTER" />
    <div className="flex flex-col gap-16">
    <h1 className='text-white text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-300'>Functionality and API Intergration</h1>
    <div className='w-[350px] text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis dicta deleniti natus. Magnam commodi odio ratione quaerat, ex amet esse omnis id suscipit rerum fuga dolor nemo veritatis sunt a.</div></div>
  </motion.div>
  <motion.div whileInView={{x: 0, opacity: 1}} initial={{x: 100, opacity: 0}}  transition={{duration: 0.670, ease: 'backInOut'}} viewport={{once: true}} className="flex justify-end w-2/8 items-center flex-wrap text-center cb">
    <img className='' src={braen} alt="COMPUTER" />
    <div className="flex flex-col gap-16 items-center">
    <h1 className='text-white text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-300'>Modern AI Intergration</h1>
    <div className='w-[350px] text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis dicta deleniti natus. Magnam commodi odio ratione quaerat, ex amet esse omnis id suscipit rerum fuga dolor nemo veritatis sunt a.</div></div>
  </motion.div>
</div>
  </>
}

export default Provision