import React , {useContext} from 'react';
import {UserContext} from "../../../context/UserContext";
import User from "./User/UserSingle";

const UserList = () => {
    const users = useContext(UserContext);
    console.log(users);
    return (
        <ul className="mt-10">
            {users.map(user => {
                return <User key={user.id} user={user} />
            })}
        </ul>
    );
};

export default UserList;