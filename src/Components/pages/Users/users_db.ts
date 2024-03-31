export type Task = {
    id: number,
    title: string,
    subtask: {
        id: number,
        title: string,
    }
}
export type User = {
    id: number,
    name: string,
    hours?: {
        month: number,
        day: number,
        hours: number
    }
    task?: Task[]
}

export const users: User[] = [
    {
        id: 0 , name: 'John Doe' , task: [
            {id: 0 , title: 'PHP' , subtask: {id: 0 , title: 'Support'}}
        ]
    },
    {
        id: 1 , name: 'Doe John' , task: [
            {id: 0 , title: 'Angular' , subtask: {id: 0 , title: 'Dev'}}
        ]
    },
    {
        id: 2 , name: 'Placeholder Name' , task: [
            {id: 0 , title: 'React' , subtask: {id: 0 , title: 'CRM'}}
        ]
    },
]