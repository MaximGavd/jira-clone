import React from 'react'
import User from './User'
import Bell from './Bell'

const Profile = () => {
  return (
    <div className='flex items-center cursor-pointer'>
        <Bell />
        <User />
    </div>    
  )
}

export default Profile