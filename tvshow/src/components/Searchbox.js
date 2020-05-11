import React from 'react';

const Searchbox = ({ searchfield, searchChange}) => {
    return (
        <div className='p2 flex align-center justify-center'>
        <input 
        className=" pa3 ma3 br4 ba b--green bg-lightest-blue "
        type="search" 
        placeholder="search shows"
        onChange={searchChange} />
        </div>
    )
}

export default Searchbox;