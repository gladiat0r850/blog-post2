import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { AnimatePresence, motion } from 'framer-motion';
import gmail from './assets/email.webp';

function OrderProduct() {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [plansDropdownOpen, setPlansDropdownOpen] = useState(false);
  const [plans] = useState(['Starter plan (500$)', 'Standard plan (950$)', 'Advanced plan (1750$)']);
  const [selectedPlan, setSelectedPlan] = useState('Select your plan');
  const [price, setPrice] = useState(0);
  const [feedbackMsg, setFeedbackMsg] = useState('');
  const msgRef = useRef(null);

  const planPrices = [500, 950, 1750];
  const formRef = useRef();

  const SERVICE_ID = 'service_92aykxm';
  const TEMPLATE_ID = 'template_mskstxf';
  const API_KEY = 'Ai0j2nqxYP2sFQ_IB';

  useEffect(() => {
    emailjs.init(API_KEY);
  }, [API_KEY]);

  useEffect(() => {
    if (msgRef.current) {
      msgRef.current.style.backgroundColor = feedbackMsg === 'Email sent successfully!' ? 'yellowgreen' : feedbackMsg ? 'red' : 'transparent';
    }
  }, [feedbackMsg]);

  const sendEmail = (e) => {
    e.preventDefault();

    if (name.trim() && email.trim() && message.trim() && price !== 0) {
      emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: name,
        message: message,
        user_email: email,
        to_name: 'X3NOGLADIAT0R'
      })
      .then(res => {
        console.log(res.status);
        setFeedbackMsg('Email sent successfully!');
      })
    }
     else {
      setFeedbackMsg('All fields should be filled out!');
    }
    setTimeout(() => {
      setFeedbackMsg(false)
    }, 5000);
  };

  return (
    <motion.div 
      initial={{ x: -100, opacity: 0 }} 
      animate={{ x: 0, opacity: 1 }} 
      transition={{ duration: 0.670, ease: 'backInOut' }} 
      className="flex items-center justify-evenly flex-wrap h-screen"
    >
      <img src={gmail} style={{ width: '500px', height: '500px', objectFit: 'cover' }} alt="Email Illustration" />
      <div className="flex flex-col justify-around rounded-2xl items-center h-fit w-[90%] sm:w-[800px] p-5 flex-wrap">
        <div className="flex flex-col h-[80%] gap-10 w-[100%] justify-around items-center">
          <h1 className='text-4xl text-white font-semibold'>Fill out your form and you're good to go!</h1>
          <textarea 
            maxLength={350} 
            className='h-40 resize-none w-3/4 outline-none p-2 text-white text-xl bg-[#333333] rounded-[5px]' 
            value={message} 
            placeholder='Your message...' 
            onChange={e => setMessage(e.target.value)} 
          />
          <div className="flex flex-col gap-6 w-[100%] items-center">
            <input 
              type="text" 
              className='h-10 w-3/4 outline-none p-2 text-white text-xl bg-[#333333] rounded-[5px]' 
              value={name} 
              placeholder='Your name...' 
              onChange={e => setName(e.target.value)} 
            />
            <input 
              type="email" 
              className='h-10 w-3/4 outline-none p-2 text-white text-xl bg-[#333333] rounded-[5px]' 
              value={email} 
              placeholder='Your email' 
              onChange={e => setEmail(e.target.value)} 
            />
          </div>
          <div className="flex w-[100%] flex-wrap-reverse sm:gap-8 items-center justify-evenly relative">
            <motion.button 
              onClick={sendEmail}
              whileHover={{ scale: 1.07, background: 'white', color: 'black' }}
              whileTap={{ scale: 0.9 }} 
              transition={{ duration: 0.05 }} 
              className='w-[75%] sm:w-[25%] mt-5 sm:mt-0 h-12 border-white border-[2px] rounded-lg text-white text-xl transition-all duration-300'
            >
              Submit
            </motion.button>
            <div className="flex flex-col relative">
              <div 
                onClick={() => setPlansDropdownOpen(!plansDropdownOpen)} 
                className="bg-[#333333] flex text-white text-xl cursor-pointer text-center items-center h-14 w-64"
              >
                <h1>{selectedPlan}</h1>
              </div>
              <AnimatePresence>
                {plansDropdownOpen && (
                  <motion.div 
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }} 
                    transition={{ duration: 0.5, ease: 'backInOut' }} 
                    className="absolute top-14 left-0 w-full bg-[#242424]"
                  >
                    {plans.map((plan, index) => (
                      <div 
                        key={plan} 
                        onClick={() => {
                          setSelectedPlan(plan);
                          setPlansDropdownOpen(false);
                          setPrice(planPrices[index]);
                        }} 
                        className="h-1/3 text-2xl border-b-2 border-[#333333] cursor-pointer text-white p-2"
                      >
                        {plan}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <AnimatePresence>
          {feedbackMsg && <motion.div exit={{opacity: 0, y: -35}} ref={msgRef} className="text-white flex items-center p-2 rounded-md h-14 w-[80%]">
            <h1 className='text-xl'>{feedbackMsg}</h1>
            </motion.div>}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export default OrderProduct;