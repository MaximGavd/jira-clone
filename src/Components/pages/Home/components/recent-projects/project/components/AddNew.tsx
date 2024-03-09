import React from 'react'
import addNew from '../assets/add_new.svg'
import { Link } from 'react-router-dom';

const AddNew:React.FC<{project: string}> = ({project}) => {
  return (
    <Link className='absolute hover:-translate-y-1 ease-in duration-100 right-2 bottom-2 text-dark bg-white w-10 h-10 rounded-full' to={`${project}/add`}>
        <img src={addNew} />
    </Link>
  )
}

export default AddNew