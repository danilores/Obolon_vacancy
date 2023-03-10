import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Login from './pages/login/Login'
import Main from './Main/Main';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='*' element={<Login />} />
          <Route path="/Main" element={<Main/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
