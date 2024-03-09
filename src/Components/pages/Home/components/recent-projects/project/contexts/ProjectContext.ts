import { createContext } from 'react';
import { projects } from '../project_db';

export const ProjectContext = createContext(projects);