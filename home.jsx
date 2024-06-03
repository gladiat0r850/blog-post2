import React, { useState } from 'react'
import Navbar from './navbar';
import { motion, useScroll } from 'framer-motion';
import Provision from './provision';
import Pc from './assets/pc.webp'
import phone from './assets/phone.webp'
import gear from './assets/gear.png'
import Card from './testimonials.jsx'
import Goku from './assets/goku.webp'
import killerofares from './assets/fuckzeus.jpg'
import braen from './assets/bulb2.png'
import Prices from './prices.jsx';
import OrderProduct from './OrderProduct.jsx';

function Home() {
  const object = [{
    img: Goku,
    name: 'Son Goku',
    desc: `Hey, this web agency? They're something else! Their websites move smoother than my Super Saiyan transformations. I don't know how they do it, but navigating their sites feels like flying through the clouds. If you're looking for a digital adventure, these guys are the Dragon Balls of the internet!`
  },
  {
    img: killerofares,
    name: "Kratos",
    desc: "By the gods, this web agency is a force to be reckoned with! Their websites wield the power of Olympus itself, with seamless transitions smoother than my Blades of Chaos. I may not understand their magic, but navigating their sites feels like conquering a new realm. For an online odyssey like no other, trust in the might of this web agency!"
  }
]

const Plans = [
  {
    title: 'Starter Plan',
    price: 500,
    features: [
      '✔️ 1-2 Pages',
      '✔️ Basic  SEO Optimization',
      '✔️ Free bug fixes',
      '✔️ Responsive Design',
      '✔️ Basic looking user interface',
      '⚪ Offers functionality',
      '❌ Backend web servers & database',
      '❌ Smooth animations',
      '❌ AI Intergration',
      '❌ Custom search engine'
    ]
  },
  {
    title: 'Standart Plan',
    price: 950,
    features: [
      '✔️ 5-7 Pages',
      '✔️ Great SEO Optimization',
      '✔️ Free bug fixes',
      '✔️ Responsive Design',
      '✔️ Great looking user interface',
      '✔️ Offers functionality',
      '✔️ Backend web servers & database',
      '✔️ Smooth animations',
      '❌ AI Intergration',
      '⚪ Custom search engine'
    ]
  },
  {
    title: 'Advanced Plan',
    price: 1700,
    features: [
      '✔️ 15 Pages',
      '✔️ Great SEO Optimization',
      '✔️ Free bug fixes',
      '✔️ Responsive Design',
      '✔️ Amazing looking user interface',
      '✔️ Offers advanced functionality',
      '✔️ Backend',
      '✔️ Smooth animations',
      '✔️ AI Intergration',
      '✔️  Custom search engine'
    ]
  },
]
    return <>
    <div className="flex items-center h-screen w-screen flex-col mt-16">
        <div 
            className="flex items-center justify-center flex-col h-[80vh] w-screen gap-14 text-center">
              <motion.div
              initial={{x: -100, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{duration: 0.670, ease: 'backInOut'}}
              >
              <h1 className="text-[70px] text-[#C0C0C0] font-light ez">Create,grow and scale your business.</h1>
              </motion.div>
              <motion.div
              initial={{y: 80, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{duration: 0.70, ease: 'backInOut'}} 
              className="flex flex-col gap-14 items-center">
              <div
              className='text-white w-[350px] sm:w-[950px]'>
                X3NOBluetzz, our web agency harnesses the power of React, Tailwind CSS, and Framer Motion. We blend cutting-edge technology with creativity to build captivating websites that engage and inspire. With expertise in responsive design and seamless animations, we deliver tailor-made solutions that leave a lasting impression</div>
              <motion.button 
              whileHover={{scale: 1.07, background: 'white', color: 'black'}}
              whileTap={{scale: 0.9}} transition={{duration: 0.05}} 
              className='w-56 h-16 border-white border-[2px] rounded-2xl text-white text-3xl transition-all duration-300'>
                Book a call</motion.button>
                </motion.div>
        </div>
      </div>
      <div className="flex justify-center">
        <h1 className='font-semibold text-3xl mb-16 text-white sm:text-6xl'>What do we provide</h1>
        </div>
        <div className="mt-40">
      <Provision pc={Pc} phone={phone} gear={gear} braen={braen} />
      </div>
      <div className="mt-40 text-center">
      <motion.h1 initial={{y: -50, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{once: true}} transition={{duration: 0.670, ease: 'backInOut'}} className='text-white text-5xl sm:text-6xl'>Testimonials</motion.h1>
      <div className="flex mt-28 gap-36 justify-center flex-wrap">
      {object.map((item, index) => {return <Card img={item.img} name={item.name} desc={item.desc}/>})}
        </div>
      </div>
      <div className="flex justify-center w-screen gap-24 mt-64 flex-wrap sm:flex-nowrap">
  <Prices title={Plans[0].title} price={Plans[0].price} offers={Plans[0].features}/>
  <Prices title={Plans[1].title} price={Plans[1].price} offers={Plans[1].features}/>
  <Prices title={Plans[2].title} price={Plans[2].price} offers={Plans[2].features}/>
</div>
</>
}


export default Home