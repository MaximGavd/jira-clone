import React from 'react'
import Button from '@mui/material/Button';
import logo from '../../../assets/img/exteta.svg'
import Menu  from './pages/menu/Menu';
import Profile from './pages/profile/Profile';

const Header = () => {
  return (
    <div className='bg-dark'>
      <div className='container mx-auto flex justify-between py-5 items-center'>
        <div className='header-logo'>
          <img src={logo} />
        </div>
        <Menu />
        <Profile />
      </div>
    </div>    
  )
}

export default Header