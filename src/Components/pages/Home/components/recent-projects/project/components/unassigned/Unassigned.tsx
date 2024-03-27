import React from 'react'
import { Link } from 'react-router-dom'
import { ChildProjects } from '../../project_db'
import ToOthers from './components/ToOthers'

const Unassigned:React.FC<{subtasks: ChildProjects[] , project: string}> = ({subtasks , project}) => {
  return (
        <div>
          <div className='text-base font-semibold mb-2'>Projects:</div>
          <ul className='ml-4 text-sm font-light'>
            {subtasks.map(subtask => (
                !subtask.assigned.includes(0) && <ToOthers key={subtask.id} parent={project.toLowerCase()} title={subtask.title.toLowerCase()} />
            ))}
          </ul>
        </div>
  )
}

export default Unassigned