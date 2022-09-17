import React from 'react'
import mern from '../img/mern.jpg'
import reactjs from '../img/reactjs.jpg'
import landing from '../img/landing.jpg'

function Projects() {
  return (
    <div className='projects'>
      <h1>Мои проекты</h1>
      <div className='card'>
        <a href='http://denissokolov.ru/' rel='noreferrer' target='_blank'><b>MERN PWA приложение на React</b></a>
        <img src={mern} alt="MERN"></img>
        <a href='https://github.com/denissokolow/blogv3' rel='noreferrer' target='_blank'><b>GitHub</b></a>
      </div>
      <div className='card'>
        <a href='http://bprof.b91184ue.beget.tech/' rel='noreferrer' target='_blank'><b>React приложение</b></a>
        <img src={reactjs} alt="REACTJS"></img>
        <a href='https://github.com/denissokolow/normer' rel='noreferrer' target='_blank'><b>GitHub</b></a>
      </div>
      <div className='card'>
        <a href='https://bakemeupspb.ru/' rel='noreferrer' target='_blank'><b>Одностраничный сайт</b></a>
        <img src={landing} alt="LANDING"></img>
        <a href='/projects' rel='noreferrer'><b>GitHub</b></a>
      </div>
    </div>
  )
}

export default Projects