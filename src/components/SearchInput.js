import React from 'react';

const SearchInput = () => {
    return(
        <div className="mt-5">
            <input 
                type="text" 
                placeholder="Search for recipes..." 
                className="input"
            />
        </div>
    )
}

export default SearchInput;