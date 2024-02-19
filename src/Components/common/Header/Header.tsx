import React from 'react'

const Header = () => {
  return (
    <div className='bg-blue'>
      <div className='container mx-auto grid-cols-3 grid'>
        <div>here is logo</div>
        <div>here is menu</div>
        <div>
          <button className='bg-blue-btn btn'>Log in</button>
        </div>
      </div>
    </div>    
  )
}

export default Header