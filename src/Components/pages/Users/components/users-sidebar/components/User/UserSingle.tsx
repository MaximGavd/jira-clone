import React from 'react';
import {User} from '../../../../users_db';
import {Link} from "react-router-dom";
import image_user from '../../assets/image_user.png'

const UserSingle:React.FC<{user: User}> = ({user}) => {
    const userClassName = "hover:bg-white hover:text-dark duration-300 ease-in-out mb-4 cursor-pointer text-white text-md border rounded-md border-white px-2 py-3 font-medium flex items-center"
    return (
        <Link to={user.id.toString()}>
            <li className={userClassName}>
                <span className="mr-4"><img src={image_user} alt={image_user}/></span>
                <span>{user.name}</span>
            </li>
        </Link>
    );
};

export default UserSingle;