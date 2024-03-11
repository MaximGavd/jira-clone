import React from 'react'
import RecentProjects from './components/recent-projects/RecentProjects'
import CompletedSoon from './components/completed-soon/CompletedSoon'

const Home = () => {
  return (
    <div className='container mx-auto mt-12'>
        <RecentProjects />
        <CompletedSoon />
    </div>
  )
}

export default Home