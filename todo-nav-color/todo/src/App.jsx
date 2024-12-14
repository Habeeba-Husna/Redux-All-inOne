import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Task from './components/Task';
import './App.css'
import Home from './components/Home'
import View from './components/View';

function App() {
 

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/task' element={<Task/>} />
        <Route path='/view/:id' element={<View/>}/>
      </Routes>
    </Router>
   
  )
}

export default App
