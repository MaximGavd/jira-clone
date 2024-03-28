import React , {useContext} from 'react'
import SoonContext from "./project/context/SoonContext";

const CompletedSoon = () => {
    const completed_soon = useContext(SoonContext);
    console.log(completed_soon);
    return (
        <div className='mt-20'>
            <div className='text-2xl mb-4 text-dark font-semibold'>Completed soon</div>
            <div className='container bg-dark rounded-lg'>
                <div className="containerInner"></div>
                {completed_soon.map((project) => {
                    return <li>{project.title}</li>
                })}
            </div>
        </div>
    )
}

export default CompletedSoon