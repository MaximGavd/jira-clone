export type SinglePage = {
    id: number;
    name: string;
    link?: string | '#';
    child?: SinglePage[]    
}

export const pages: SinglePage[] = [
    {id: 0 , name: "teams" , link: '/teams' , child: [
      {id: 0 , name: 'Team A' , link: '/team/a'},
      {id: 1 , name: 'Team B' , link: '/team/b'},
      {id: 2 , name: 'Team C' , link: '/team/c'}
    ]}, 
    {id: 1 , name: "projects" , link: '/projects' , child: [
      {id: 0 , name: 'SMM' , link: '/project/wordpress'},
      {id: 1 , name: 'PHP' , link: '/projects/php'},
      {id: 2 , name: 'Javascript' , link: '/projects/javascript'}
    ]},
    {id: 2 , name: "monitoring" , child: [
      {id: 0 , name: 'Worklog' , link: '/users'},
      {id: 1 , name: 'Users' , link: '/worklogs'},
    ]}, 
    {id: 3 , name: "schedule" , link: '/schedule'}, // alternative for timeline Jira
    {id: 4 , name: "wiki" , link: '/wiki'}, // can be also a dropdown with docs such "WP Docs" , "PHP Docs" and so on
  ]