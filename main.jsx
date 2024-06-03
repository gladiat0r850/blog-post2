import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Home from './home.jsx'
import Test from './Test.tsx'
import Learn from './learn.tsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Learn />
  </BrowserRouter>
)
