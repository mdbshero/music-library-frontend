import React, { useState, useEffect } from 'react';


const SearchBar = (props) => {
      
    return ( 

        <div className="border">
          <div>
            Search
          </div>
          <input type="text" value={props.query} onChange={(e) => props.setQuery(e.target.value)} />
        </div>

     );
}
 
export default SearchBar;