import React , {useContext} from 'react'
import Project from './project/Project'
import { ProjectContext } from './project/contexts/ProjectContext' 

const RecentProjects = () => {
  const projects = useContext(ProjectContext) 
  return (
    <>
        <div className='text-2xl mb-4 text-dark font-semibold'>Recent projects</div>
        <div className='grid grid-cols-4 gap-5'> 
        {/* {projects.map(project => {
            return <div>{project.id}</div>;
        })} */}
            <Project project="React" />
            <Project project="PHP" />
            <Project project="Angular" />
            <Project project="SMM" />
        </div> 
    </>
  )
}

export default RecentProjects