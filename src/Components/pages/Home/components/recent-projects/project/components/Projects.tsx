import React from 'react'
import { Link } from 'react-router-dom'

const Projects:React.FC<{project: string}> = ({project}) => {
  return (
        <div>
          <div className='text-base font-semibold mb-2'>Projects:</div>
          <ul className='ml-4 text-sm font-light'>
            <li className='mb-1'><Link to={`${project}/support`}>Development</Link></li>
            <li className='mb-1'><Link to={`${project}/Research`}>Design</Link></li>
            <li><Link to={`${project}/Research`}>Research</Link></li>
          </ul>
        </div>
  )
}

export default Projects