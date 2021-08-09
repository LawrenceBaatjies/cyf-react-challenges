import React, { useRef, useEffect } from 'react';

const Search = ({ searchValue, setSearchValue }) => {
    const inputRef = useRef();

    useEffect(() =>{
        inputRef.current.focus();
    },[])

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <div className="search">
            <input
                ref={inputRef}
                type="text"
                value={searchValue}
                onChange={handleSearchChange}
                placeholder="Search for a name..."
            >
            </input>
        </div>
    )
}

export default Search;
