import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter, Routes, Route } from 'react-router-dom'
import About from './components/About'
import LearnMore from './components/learnMore'
import Layout from './layout/Layout'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<App />} />
          <Route path="about" element={<About />} />
          <Route path="learn" element={<LearnMore />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
)
