import React from 'react'
import { Link } from 'react-router-dom';
import styles from '../../styles/styles.module.css'
import Subpage from './Subpage';
import { SinglePage } from './pages';


const Page: React.FC<{ page:SinglePage }> = ({ page }) => {
  return (
    <li className={`${styles.headerMenuItem + ' ' + styles.headerParentPage} px-5 py-4 relative text-center`}>
      <Link className='text-base uppercase' to={page.link || "#"}>{page.name} {page.child && <span className='text-md ml-1 relative -top-1'>⌄</span>}</Link>      
      {page.child && <Subpage child={page.child} /> }
    </li>
  )
}

export default Page