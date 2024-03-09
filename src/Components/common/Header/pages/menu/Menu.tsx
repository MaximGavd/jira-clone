import React, { useContext } from 'react'
import Page from './Page'
import { PageContext } from '../../contexts/PageContext'

const Menu = () => {
    const pages = useContext(PageContext);
    return (
        <div className='header-menu'>
            <ul className='flex bg-dark rounded-md border border-gray-300'>
            {pages.map((page) => {
                return <Page key={page.id} page={page} /> 
            })}                      
            </ul>
        </div>
    )
}

export default Menu