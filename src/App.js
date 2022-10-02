import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import DotLoader from "react-spinners/DotLoader"
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contacts from "./components/Contacts"
import Projects from "./components/Projects"
import "./App.css"

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
  }, []);

  return isLoading ?
    <DotLoader
      display={'block'}
      margin-top={'10%'}
      color={'rgb(88, 86, 86  )'}
      size={'30'}
      isLoading={isLoading}
    /> :
    <div className="container">
      <Navbar />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='*' element={<About />} />
      </Routes>
    </div>
}

export default App;
