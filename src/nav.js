import React from 'react'
import logo from '../src/Troll Face.png'

const Nav = () => {
  return (
    <header>
      <div className='logoSection'>
        <img src={logo} alt='logo' className='logo'></img>
        <h2 className='orgName'>Meme Generator</h2>
      </div>

      <div className='right_section'>
        React-course - Project 3
      </div>
        
    </header>
  )
}

export default Nav