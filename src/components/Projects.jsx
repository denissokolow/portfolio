import React from 'react'
import mern from '../img/mern.jpg'
import reactjs from '../img/reactjs.jpg'
import landing from '../img/landing.jpg'

function Projects() {
  return (
    <div className='projects'>
      <h1>Мои проекты</h1>
      <div className='card'><img src={mern} alt="MERN"></img></div>
      <div className='card'><img src={reactjs} alt="REACTJS"></img></div>
      <div className='card'><img src={landing} alt="LANDING"></img></div>
    </div>
  )
}

export default Projects