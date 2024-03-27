import React from 'react'
import { ChildProjects, ProjectType } from '../../project_db'
import ToMe from './components/ToMe'

const Assing:React.FC<{subtasks: ChildProjects[] , project: string}> = ({subtasks , project}) => {
  return (    
    <div className='mb-5'>
          <div className='text-base font-semibold mb-2'>Assign to me:</div>
          <ul className='ml-4 text-sm font-light'>
            {subtasks.map(subtask => (
                subtask.assigned.includes(0) && <ToMe key={subtask.id} parent={project.toLowerCase()} title={subtask.title.toLowerCase()} />
            ))}
          </ul>
        </div>
  )
}

export default Assing