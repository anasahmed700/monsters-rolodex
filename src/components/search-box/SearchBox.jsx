import React from 'react'
import './search-box.css'

const SearchBox = ({ placeholder, handleChange }) => {
    return (
        <div>
            <input type='search' placeholder={placeholder} 
            className="search" onChange={handleChange} />
        </div>
    )
}

export default SearchBox
