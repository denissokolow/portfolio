import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {

  constructor(){
    super();
    this.state = {
      about: 300,
      projects: 300,
      contacts: 300
    }
  }

  hendlerAbout = () =>{
      this.setState({
        about: 700,
        projects: 300,
        contacts: 300
      })
    }
    hendlerProjects = () =>{
      this.setState({
        about: 300,
        projects: 700,
        contacts: 300
      })
    }
    hendlerContacts = () =>{
      this.setState({
        about: 300,
        projects: 300,
        contacts: 700
      })
    }

  render () {
    return (
    <div className='nav'>
        <Link to='/' style={{fontWeight:this.state.about}} onClick={this.hendlerAbout}>Обо мне</Link>
        <Link to='/projects'style={{fontWeight:this.state.projects}} onClick={this.hendlerProjects}>Проекты</Link>
        <Link to='/contacts'style={{fontWeight:this.state.contacts}} onClick={this.hendlerContacts}>Контакты</Link>
    </div>
    )
  }
}


export default Navbar