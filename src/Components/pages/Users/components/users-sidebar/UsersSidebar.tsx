import React from 'react';
import UserList from "./components/UserList";
import UserSearch from "./components/SearchUser/UserSearch";
import {useParams, useRoutes} from "react-router-dom";

const Users = () => {
    const id = useParams();
    console.log(id , 'param');
    return (
        <div className="text-left col-span-4 bg-dark rounded-md p-3">
            <UserSearch />
            <UserList />
        </div>
    );
};

export default Users;