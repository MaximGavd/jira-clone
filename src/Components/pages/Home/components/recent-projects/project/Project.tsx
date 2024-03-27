import React from 'react'
import Assing from './components/assing/Assing';
import Unassigned from './components/unassigned/Unassigned';
import AddNew from './components/AddNew';
import { ProjectType } from './project_db';

const Project: React.FC<{projects: ProjectType}> = ({projects}) => {
  return (
    <div className='bg-dark rounded-lg pt-8 pl-12 pb-6 pr-2 text-left relative'>
        <div className='text-lg mb-7'>{projects.title}</div>
        <Assing project={projects.title.toLowerCase()} subtasks={projects.subtasks} />  
        <Unassigned project={projects.title.toLowerCase()} subtasks={projects.subtasks} />
        <AddNew project={projects.title.toLowerCase()} />
    </div>
  )
}

export default Project