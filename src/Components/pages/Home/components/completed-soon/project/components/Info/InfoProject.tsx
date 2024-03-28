import React from 'react';
import {CompletedSoon} from "../../completed_soon_db";


const InfoProject:React.FC<{project: CompletedSoon }> = ({project}) => {
    return (
        <div>
            <div className="bg-white text-dark text-left rounded-md py-8 px-8">
                <div className="text-xl mb-2 font-semibold">{project.title}</div>
                <div className="text-dark text-base font-semibold">Project: <span className="font-bold">{project.info.title}</span></div>
                <div className="text-dark text-base font-semibold">Reporter: <span className="font-bold">{project.info.reporter}</span></div>
                <div className="text-dark text-base font-semibold">Assigned to: <span className="font-bold">{project.info.assined}</span></div>
                <div className="text-dark text-base font-semibold">Progress: <span className="font-bold">{project.info.progress}%</span></div>
                <div className="text-dark text-base font-semibold">Hours: <span className="font-bold">{project.info.hours}h</span></div>
            </div>
        </div>
    );
};

export default InfoProject;