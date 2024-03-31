import React from 'react';
import UserList from "./components/UserList";
import UserSearch from "./components/SearchUser/UserSearch";

const Users = () => {
    return (
        <div className="text-left col-span-4 bg-dark rounded-md p-3">
            <UserSearch />
            <UserList />
        </div>
    );
};

export default Users;