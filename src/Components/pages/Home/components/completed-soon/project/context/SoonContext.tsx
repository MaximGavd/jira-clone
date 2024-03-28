import React , {createContext} from 'react';
import {completed_soon} from "../completed_soon_db";


const SoonContext = createContext(completed_soon);

export default SoonContext;