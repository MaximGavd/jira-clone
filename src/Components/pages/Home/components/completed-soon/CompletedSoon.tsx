import React , {useContext} from 'react'
import SoonContext from "./project/context/SoonContext";
import style from './project/assets/style.module.css'
import InfoProject from "./project/components/Info/InfoProject";
const CompletedSoon = () => {
    const completed_soon = useContext(SoonContext);
    return (
        <div className='mt-20'>
            <div className='text-2xl mb-4 text-dark font-semibold'>Completed soon</div>
            <div className='container bg-dark rounded-lg py-20'>
                <div className={`${style.containerInner} grid text-left grid-cols-2 gap-4`}>
                    {completed_soon.map((project) => {
                        return <InfoProject key={project.id} project={project} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default CompletedSoon