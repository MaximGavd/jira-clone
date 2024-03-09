type ChildProjects = {
    id: number,
    title: string,
    assigned: Number[],
    prio?: Number,
    count?: Number,
}

type Projects = { 
    id: number,
    title: string,
    projects: ChildProjects[]
}

export const projects: Projects[] = [
    {id: 0 , title: 'React' , projects: [
        {id: 0 , title: 'Support' , assigned: [0 , 1 , 2] , prio: 2 , count: 3 },
        {id: 1 , title: 'Research' , assigned: [0] , count: 0 },
        {id: 2 , title: 'Design' , assigned: [2] },
        {id: 2 , title: 'Development' , assigned: [2] },
    ]},
    {id: 1 , title: 'Angular' , projects: [
        {id: 0 , title: 'Support' , assigned: [0 , 1 , 2] , prio: 2 , count: 3 },
        {id: 1 , title: 'Research' , assigned: [0] , count: 0 },
        {id: 2 , title: 'Design' , assigned: [2] },
        {id: 2 , title: 'Development' , assigned: [2] },
    ]},
    {id: 2 , title: 'PHP' , projects: [
        {id: 0 , title: 'Support' , assigned: [0 , 1 , 2] , prio: 2 , count: 3 },
        {id: 1 , title: 'Research' , assigned: [0] , count: 0 },
        {id: 2 , title: 'Design' , assigned: [2] },
        {id: 2 , title: 'Development' , assigned: [2] },
    ]},
    {id: 3 , title: 'SMM' , projects: [
        {id: 0 , title: 'Support' , assigned: [0 , 1 , 2] , prio: 2 , count: 3 },
        {id: 1 , title: 'Research' , assigned: [0] , count: 0 },
        {id: 2 , title: 'Design' , assigned: [2] },
        {id: 2 , title: 'Development' , assigned: [2] },
    ]},
]