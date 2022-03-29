import React, { useState, useEffect } from 'react';


const SearchBar = (props) => {
      
    return ( 

        <div className=''>
          <input type="text" className='form-control' placeholder="Search" value={props.query} onChange={(e) => props.setQuery(e.target.value)} />
        </div>
     );
}
 
export default SearchBar;
