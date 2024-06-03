import React, { createContext, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BsTrash3Fill } from "react-icons/bs";

const months = ['Jan', 'Feb', 'March', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const date = new Date

function Blog() {
  const [blogArray, setBlogArray] = useState([])
  const [query, setQuery] = useState('');

  function AddPost(){
    if(query.trim() !== ''){
      setBlogArray([query, ...blogArray])
      setQuery('')
    }
  }
  return (
    <>
    <motion.div initial={{opacity: 0, y: -50}} animate={{opacity: 1, y: 0}} transition={{duration: 0.6, ease: 'backInOut'}} className="flex flex-col items-center mt-24 sm:mt-14">
        <div className="bg-[#242424] h-auto w-full flex-wrap border-[#333333] p-3 flex-col sm:mt-0 rounded-lg sm:w-[60%] ">
          <div className="flex w-full flex-col">
            <div className="flex gap-7 items-center justify-between">
              <div className="flex items-center gap-6">
            <img className='w-16 h-16 rounded-full object-cover cursor-pointer' src="https://images.immediate.co.uk/production/volatile/sites/3/2023/08/2023.06.28-06.20-boundingintocomics-649c79f009cdf-Cropped-8d74232.png?resize=768,574" alt="" />
            <div className="flex flex-col">
            <h1 className='text-2xl text-white'>X3NOGLADIAT0R</h1>
            <p className='text-gray-500'>@x3nobluetzz</p>
            </div>
            </div>
            <BsTrash3Fill onClick={() => setBlogArray([])} className='text-2xl transition-all text-red-500 hover:text-red-700 mr-10 cursor-pointer' />
        </div>
          <div className="flex w-full justify-center gap-5 items-center mt-7">
              <input onChange={e => setQuery(e.target.value)} value={query} className='w-[80%] bg-[#333333] h-10 rounded-[6px] text-2xl text-white' type="text" />
              <button onClick={AddPost} className='bg-green-600 h-12 w-64 text-xl text-white rounded-[7px] transition-all hover:bg-green-700'>Post</button>
          </div>
          </div>
          <div className="mt-7 gap-5 flex flex-col">
          <AnimatePresence>
          {blogArray.map(item => {return <motion.div className="bg-[#333333] h-auto p-4 rounded-xl w-full">
            <div className="flex justify-between flex-wrap gap-3 sm:gap-0">
          <div className="flex gap-6">
            <img className='h-12 w-12 rounded-full cursor-pointer object-cover' src="https://images.immediate.co.uk/production/volatile/sites/3/2023/08/2023.06.28-06.20-boundingintocomics-649c79f009cdf-Cropped-8d74232.png?resize=768,574" alt="" />
            <div className="flex flex-col">
            <h1 className='text-2xl text-white'>X3NOGLADIAT0R</h1>
            <p className='text-gray-500'>@x3nobluetzz</p>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <BsTrash3Fill className='text-xl transition-all hover:text-white cursor-pointer text-gray-400' onClick={() => setBlogArray(blogArray.filter(thing => thing !== item))} />
         <div className="flex gap-3">
         <p className='text-gray-200'>{`${months[date.getMonth()]}`} {`${date.getDay()}`}</p>
         <p className='text-gray-200'>{`${date.getHours()}`}:{`${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`}</p>
         </div>
          </div>
          </div>
          <div className="mt-5">
            <h1 className='text-white text-3xl'>{item}</h1>
          </div>
        </motion.div>
      })}
      </AnimatePresence>
      </div>
        </div>
      </motion.div>
    </>
  );
}

export default Blog;
