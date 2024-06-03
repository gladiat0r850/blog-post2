import React, { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import axios from 'axios';
import './index.css';

interface Definition {
  definition: string;
  permalink: string;
  author: string;
  example: string;
}

function Test() {
  const [query, setQuery] = useState<string>('');
  const [state, setState] = useState<Definition[]>([]);

  function getDefinitionOrWhatever() {
    axios.get(`https://api.urbandictionary.com/v0/define?term=${query}`)
      .then(res => {
        const defs: Definition[] = res.data.list.map((item: Definition) => item);
        setState(defs);
      })
      .catch(err => console.error(err));
  }

  return (
    <>
      <div className="flex gap-3 items-center mt-3">
        <input
          className='w-[500px] rounded-[5px] h-10 p-1 outline-none ml-3 border-black border-2 text-2xl'
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button
          className='bg-blue-500 transition-all hover:bg-blue-600 h-10 w-52 rounded-[7px] text-xl text-white'
          onClick={getDefinitionOrWhatever}
        >Add</button>
      </div>
      <div className="flex flex-col gap-10">
        {state.length > 0 ? state.map((item, index) => (
          <div key={index} className='rounded-md mt-5 h-auto p-4 bg-slate-200 ml-3 w-[50%]'>
            <h1>By @{item.author}</h1>
            <div className="flex flex-col gap-8 mt-2">
              <h1 className='text-xl text-black'>{item.definition}</h1>
              <h1 className='text-xl text-black'><strong>Example:</strong> {item.example}</h1>
            </div>
            <a className='text-xl text-blue-700' href={item.permalink}>Permalink: {item.permalink}</a>
          </div>
        )) : <h1>nothing to show here dumbass</h1>}
      </div>
    </>
  );
}

export default Test;
