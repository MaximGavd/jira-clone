import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/exteta.svg'

const Logo = () => {
  return (
    <div className='header-logo'>
          <Link to="/"><img src={logo} /></Link>
        </div>
  )
}

export default Logo