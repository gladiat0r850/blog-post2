import React, {useState} from 'react'
import { Link, Routes, Route, useParams } from 'react-router-dom'
import SSB from './assets/SSBKaioken.webp';
import rising from './assets/rising.png';
import tuntuli from './assets/Untitiled.jpg';
import user from './assets/149071.png';




const Learn = () => {
  interface blogObject {
    blogName: string,
    blogDescription: string,
    author: string,
    ID: number,
    profileImage: string
    }
  const [blogData, setBlogs] = useState<blogObject[]>([
    {
        "blogName": "How to fuck your mom",
        "blogDescription": "This blog is about how to fuck your mom",
        "author": "X3NOGLADIAT0R",
        "ID": 0,
        "profileImage": rising
    },
    {
        "blogName": "How big is your ass?",
        "blogDescription": "it should be big & tight & jiggly",
        "author": "X3NOGLADIAT0R",
        "ID": 1,
        "profileImage": rising
    },
    {
        "blogName": "is ანდღულაძე fat?",
        "blogDescription": "Yes.",
        "author": "irazligaming123",
        "ID": 2,
        'profileImage': SSB
    },
    {
        "blogName": "I jerked off yesterday.",
        "blogDescription": "guyz i jarked of!1!!1! smal cam out!1!!1! plz help me B(",
        "author": "tuntuli",
        "ID": 3,
        "profileImage": tuntuli
    }
])
  const [blogName, setTitle] = useState('')
  const [blogDescription, setDescription] = useState('')
  const [blogAuthor, setPoster] = useState('')

  function addBlogPost(){
    if(blogName.trim() !== '' && blogDescription.trim() !== ''){
      setBlogs([...blogData, {
        blogName: blogName,
        blogDescription: blogDescription,
        author: blogAuthor,
        ID: blogData.length,
        profileImage: user
      }])
      setTitle('')
      setDescription('')
      setPoster('')
      setPoster('')
    }
  }
  return <>
    <Routes>
      <Route 
      path='/'
      element={
      <div className='flex-col gap-5 mt-5 flex'>
        <input 
          type="text"
          className='w-[30%] h-9 rounded-md bg-[#ececec] p-2 outline-none'
          placeholder='Title...' 
          value={blogName}
          onChange={e => setTitle(e.target.value)} />
          <textarea  
          className='w-[30%] h-40 rounded-md bg-[#ececec] p-2 outline-none resize-none'
          placeholder='Description...' 
          value={blogDescription}
          onChange={e => setDescription(e.target.value)}
          maxLength={750}/>
          <input 
          type="text" 
          className='w-[30%] h-9 rounded-md bg-[#ececec] p-2 outline-none'
          placeholder='Your name...' 
          value={blogAuthor}
          onChange={e => setPoster(e.target.value)}/>
          <button 
            onClick={addBlogPost} 
            className='bg-gradient-to-r from-blue-400 to-pink-500 rounded-lg h-12 w-[30%] text-lg tracking-[3px] font-bold text-white'>
            POST</button>
        {blogData.map((item) => {
          return <div 
            className='flex flex-col'>
          <div 
            className='flex flex-col p-4 text-lg bg-[#e2e2e2] w-[30%] h-[200px] items-center justify-center rounded-md'>
            <Link 
              to={`/${item.ID}`}>
          <h1 
          className='text-3xl'>{item.blogName !== undefined ? `${item.blogName}` : ''}</h1>
          <div className="flex items-end justify-start w-full">
          <h1 
          className=''>{item.author !== undefined ? `Author: ${item.author}` : ''}</h1>
          </div>
        </Link>
        </div>
        </div>
        })}
          
        </div>
      } />
      <Route 
        path='/:number' 
        element={<Page1 Posts={blogData}/>} />
    </Routes>
  </>
}
function Page1({Posts}){
  const {number} = useParams<string>()
  const postIndex = number ? parseInt(number) : 0
  if(postIndex > Posts.length || isNaN(postIndex)){
    return <h1 className='text-3xl'>No blog post found.</h1>
  }
  return <div className="flex items-center justify-center h-screen">
<div className="p-6 rounded-md bg-[#ececec] w-[50%] flex-col">
  <div className="flex gap-5 border-b-2 border-b-[#cacaca] p-3 items-center">
    <img src={Posts[postIndex].profileImage} className='rounded-full w-12 h-12 object-cover'></img>
    <h1 className="text-xl">{Posts[postIndex].author} - {Posts[postIndex].blogName}</h1>
  </div>
  <h1 className="text-2xl mt-5">{Posts[postIndex].blogDescription}</h1>
</div>
</div>
}

export default Learn