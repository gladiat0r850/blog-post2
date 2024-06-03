import React from 'react';
import {motion} from 'framer-motion'

function Card({ img, name, desc }) {
  return (
    <motion.div
    initial={{opacity: 0, y: 100}}
    whileInView={{opacity: 1, y: 0}}
    viewport={{once: true}}
    transition={{duration: 0.670, ease: 'backInOut'}}
    className="flex flex-col items-center sm:h-96 sm:w-96 justify-center bg-black rounded-lg w-[80%] h-[80%]">
      <div className="text-white text-3xl mb-4">{name}</div>
      <div className="bg-[#242424] rounded-lg sm:h-96 sm:w-96 flex justify-center flex-col items-center">
        <img className="w-36 h-36 rounded-full object-cover mb-4" src={img} alt="" />
        <h1 className="text-white italic text-center">"{desc}"</h1>
      </div>
    </motion.div>
  );
}

export default Card;
