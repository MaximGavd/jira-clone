import React , {useContext} from 'react'
import Project from './project/Project'
import { ProjectContext } from './project/contexts/ProjectContext' 
import { ProjectType } from './project/project_db'

const RecentProjects = () => {
  const projects = useContext(ProjectContext) 
  return (
    <>
        <div className='text-2xl mb-4 text-dark font-semibold'>Recent projects</div>
        <div className='grid grid-cols-4 gap-5'> 
        {projects.map((project: ProjectType) => {
            return <Project key={project.id} projects={project} />;
        })}
        </div> 
    </>
  )
}

export default RecentProjects