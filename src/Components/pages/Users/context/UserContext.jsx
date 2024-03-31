import React , {createContext} from 'react';
import {users} from "../users_db";

export const UserContext = createContext(users);