import React from 'react'
import foto from '../img/portret.jpg'

function About() {
  return (
    <div className='content'>
       <div className='leftblock'>
        <div className='imgdiv'>
          <img src={foto} alt='Denis Sokolov'></img>
        </div>
       </div>
       <div className='description'>
        <div className='greeting'>
            <h1>Здравствуйте!</h1>
        </div>
        <div className='list' lang="ru">
        <h5>125555555555555555555555555555555555555555555555555555553</h5>
        <h5>455555555555555555555555555555555555555555556</h5>
        <h5>785555555555555555555555555555559</h5>
       </div>
       </div>
    </div>
  )
}

export default About