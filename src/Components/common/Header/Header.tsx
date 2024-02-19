import React from 'react'
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material';
const Header = () => {
  return (
    <div className='bg-dark'>
      <div className='container mx-auto grid-cols-3 grid'>
        <div>logo</div>
        <div>menu</div>
        <div className='flex'>
          <Button variant='outlined' className='btn'>Log in</Button>
        </div>
      </div>
    </div>    
  )
}

export default Header