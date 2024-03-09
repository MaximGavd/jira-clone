import React from 'react'
import { Link } from 'react-router-dom'
import addNew from '../../../../../../assets/img/add_new.svg';
import Assing from './components/Assing';
import Projects from './components/Projects';
import AddNew from './components/AddNew';

const Project:React.FC<{project: string}> = ({project}) => {
  return (
    <div className='bg-dark rounded-lg pt-8 pl-12 pb-6 pr-2 text-left relative'>
        <div className='text-lg mb-7'>{project}</div>
        <Assing project={project} />
        <Projects project={project} />
        <AddNew project={project} />
    </div>
  )
}

export default Project