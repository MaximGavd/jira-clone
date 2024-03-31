import React from 'react';
import searchIcon from "../../assets/search_icon.png";

const UserSearch = () => {
    const [search , setSearch] = React.useState('');
    const [hasValue , setHasValue] = React.useState(false);
    const iconDefaultStyles = 'absolute transform right-3 top-0 translate-y-1/2 ease-in-out duration-300 opacity-1';
    const iconDisappearStyles = 'absolute transform right-3 top-0 translate-y-1/4 opacity-0 ease-in-out duration-300';
    const onSearch = (value: string) => {
        value ? setHasValue(true) : setHasValue(false) ;
        return setSearch(value);
    }
    return (
        <div className="relative">
            <input onChange={(event) => onSearch(event.target.value)} value={search} className="w-full bg-dark rounded-md border border-gray-300 text-white placeholder:text-white placeholder:text-md text-md placeholder:font-light p-3 outline-0" type="text" placeholder="Search..."/>
            <img className={hasValue ? iconDisappearStyles : iconDefaultStyles } src={searchIcon} />
        </div>
    );
};

export default UserSearch;