import React from 'react';
import UsersSidebar from "./components/users-sidebar/UsersSidebar";

const Users = () => {
    return (
        <div className="container mx-auto">
            <div className="text-2xl font-semibold text-dark mt-12">Users</div>
            <div className="container grid grid-cols-12">
                <UsersSidebar />
            </div>
        </div>
    );
};

export default Users;