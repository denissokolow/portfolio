import React from 'react'
import letter from '../img/letter.svg'
import git from '../img/git.svg'

function Contacts() {
  return (
    <div className='contacts'>
      <div className='contCard'>
        <div className='contCardPlate'>
          <img src={letter} alt='letter'></img>
          <p><a href='mailto:denis.sokolow@gmail.com'>denis.sokolow@gmail.com</a></p>
        </div>
        <div className='contCardPlate'>
          <img src={git} alt='git'></img>
          <p><a href='https://github.com/denissokolow?tab=repositories' rel="noreferrer" target="_blank">GitHub</a></p>
        </div>
      </div>
    </div>
  )
}

export default Contacts