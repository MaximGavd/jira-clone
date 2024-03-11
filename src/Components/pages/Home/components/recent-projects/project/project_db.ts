export type ChildProjects = {
    id: number,
    title: string,
    assigned: Number[],
    prio?: Number,
    count?: Number,
}

export type ProjectType = { 
    id: number,
    title: string,
    subtasks: ChildProjects[]
}

export const projects: ProjectType[] = [
    {id: 0 , title: 'React' , subtasks: [
        {id: 0 , title: 'Support' , assigned: [0 , 1 , 2] , prio: 2 , count: 3 },
        {id: 1 , title: 'Research' , assigned: [0] , count: 0 },
        {id: 2 , title: 'Design' , assigned: [0 , 2] },
        {id: 3 , title: 'Development' , assigned: [2] },
    ]},
    {id: 1 , title: 'Angular' , subtasks: [
        {id: 0 , title: 'Support' , assigned: [0 , 1 , 2] , prio: 2 , count: 3 },
        {id: 1 , title: 'Research' , assigned: [0] , count: 0 },
        {id: 2 , title: 'Design' , assigned: [2] },
        {id: 3 , title: 'Development' , assigned: [0 , 2] },
    ]},
    {id: 2 , title: 'PHP' , subtasks: [
        {id: 0 , title: 'Support' , assigned: [0 , 1 , 2] , prio: 2 , count: 3 },
        {id: 1 , title: 'Research' , assigned: [0] , count: 0 },
        {id: 2 , title: 'Design' , assigned: [2] },
        {id: 3 , title: 'Development' , assigned: [2] },
    ]},
    {id: 3 , title: 'SMM' , subtasks: [
        {id: 0 , title: 'Support' , assigned: [0 , 1 , 2] , prio: 2 , count: 3 },
        {id: 1 , title: 'Research' , assigned: [0] , count: 0 },
        {id: 2 , title: 'Design' , assigned: [2] },
        {id: 3 , title: 'Development' , assigned: [2] },
    ]},
]