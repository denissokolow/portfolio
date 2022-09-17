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
          <h2>Здравствуйте!</h2>
        </div>
        <div className='list' lang="ru">
          <p>Меня зовут Денис Соколов и я начинающий Frontend Developer.
            <br></br>Окончил курсы повышения квалификации в Университете ИТМО по специальности веб-разработчик.
            <br></br>Освоенный стек технологий: <b>JavaScript</b>, <b>React</b>, <b>Node.js</b>, <b>Express</b>, <b>MongoDB</b>.
            <br></br>Я знаю, как работать с GitHub, работать с терминалом в ОС Linux.
            <br></br>Вы можете посмотреть мои работы на странице Проекты, ссылку на GitHub на странице Контакты.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About