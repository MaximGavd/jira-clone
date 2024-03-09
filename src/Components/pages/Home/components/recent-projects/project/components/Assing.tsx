import React from 'react'
import { Link } from 'react-router-dom'

const Assing: React.FC<{project: string}> = ({project}) => {
  return (
    <div className='mb-5'>
          <div className='text-base font-semibold mb-2'>Assign to me:</div>
          <ul className='ml-4 text-sm font-light'>
            <li className='mb-2'><Link to={`${project}/support`}>Support</Link></li>
            <li><Link to={`${project}/Research`}>Research</Link></li>
          </ul>
        </div>
  )
}

export default Assing