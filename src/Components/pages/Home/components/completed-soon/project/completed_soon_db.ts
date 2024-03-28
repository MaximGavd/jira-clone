import internal from "stream";

export type CompletedSoonInfo = {
    id: number;
    title: string;
    hours?: number,
    progress: number;
    reporter: string;
    assined: string;
}
export type CompletedSoon = {
    id: number;
    title: string;
    info: CompletedSoonInfo;
}

export const completed_soon: CompletedSoon[] = [
    {
        id: 0 , title: "Angular" , info: {id: 0 , title: "CRM" , hours: 50 , progress: 60 , reporter: 'John Doe' , assined: 'John Doe assigned' }
    },
    {
        id: 1 , title: "React" , info: {id: 0 , title: "CRM" , hours: 50 , progress: 60 , reporter: 'John Doe' , assined: 'John Doe assigned' }
    },
    {
        id: 2 , title: "PHP" , info: {id: 0 , title: "CRM" , hours: 50 , progress: 60 , reporter: 'John Doe' , assined: 'John Doe assigned' }
    },{
        id: 3 , title: "SMM" , info: {id: 0 , title: "CRM" , hours: 50 , progress: 60 , reporter: 'John Doe' , assined: 'John Doe assigned' }
    },

]