import React from 'react'
import { Link } from 'react-router-dom'

const ToMe:React.FC<{parent: string , title: string}> = ({parent , title}) => {
  return (
    <li className='mb-2'><Link to={`${parent.toLocaleLowerCase() + '/' + title.toLocaleLowerCase()}`}>{title}</Link></li> 
  )
}

export default ToMe