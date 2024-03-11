import React from 'react'
import Assing from './components/assing/Assing';
import Projects from './components/Projects';
import AddNew from './components/AddNew';
import { ProjectType } from './project_db';

const Project: React.FC<{projects: ProjectType}> = ({projects}) => {
  return (
    <div className='bg-dark rounded-lg pt-8 pl-12 pb-6 pr-2 text-left relative'>
        <div className='text-lg mb-7'>{projects.title}</div>
        <Assing project={projects.title} subtasks={projects.subtasks} />  
        <Projects project="title" />
        <AddNew project="title" />
    </div>
  )
}

export default Project