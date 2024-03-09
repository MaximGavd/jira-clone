import React from 'react'
import { SinglePage } from './pages'
import { Link } from 'react-router-dom'
import styles from '../../styles/styles.module.css'

const Subpage: React.FC<{ child: SinglePage[] }> = ({ child }) => {
  return (
        <ul className={`${styles.childPage} absolute text-left top-full bg-dark left-0 rounded-md border border-gray-300 py-4 ml-2 -mt-2 pl-4 pr-6`}>
            {child.map(subpage => {
                return <li key={subpage.id} className={`${subpage.name + '_' + subpage.id} last:pb-0 pb-2 text-base uppercase`}><Link key={subpage.id} to={subpage.link || '#'}>{subpage.name}</Link></li>
            })}
        </ul>
    
  )
}

export default Subpage