import React from 'react'
import { Link } from 'react-router-dom'
import style from '../../../assets/css/style.module.css'

const ToMe:React.FC<{parent: string , title: string}> = ({parent , title}) => {
  return (
    <li className={`${style.ProjectList} mb-2`}><Link to={`${parent + '/' + title}`}>{title}</Link></li> 
  )
}

export default ToMe