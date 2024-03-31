import React from 'react';
import {User} from '../../../../users_db';
import {Link} from "react-router-dom";

const UserSingle:React.FC<{user: User}> = ({user}) => {
    const userClassName = "hover:bg-white hover:text-dark duration-300 ease-in-out mb-4 cursor-pointer text-white text-md border rounded-md border-white px-2 py-3 font-medium"
    return (
        <Link to={user.id.toString()}><li className={userClassName}>{user.name}</li></Link>
    );
};

export default UserSingle;