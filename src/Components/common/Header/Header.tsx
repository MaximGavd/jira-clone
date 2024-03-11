import React from 'react'
import Menu  from './pages/menu/Menu';
import Profile from './pages/profile/Profile';
import { Link } from 'react-router-dom';
import Logo from './pages/logo/Logo';

const Header = () => {
  return (
    <div className='bg-dark'>
      <div className='container mx-auto flex justify-between py-5 items-center'>
        <Logo />
        <Menu />
        <Profile />
      </div>
    </div>    
  )
}

export default Header