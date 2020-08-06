import React from 'react';


const Searchbox = ({searchChange}) => {
    return (
        <div>
        <input className=' pa3 ba b--green bg-lightest-blue ma3' type='search' placeholder = 'Search Robot' onChange={searchChange}></input>
        </div>
    )
}

export default Searchbox;