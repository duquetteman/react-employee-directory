import React, { useContext } from "react";
import DataAreaContext from "../utils/DataAreaContext";

const SearchName = () => {
  const context = useContext(DataAreaContext);

  return (
    
      <div className="input-group">
          <div className="input-group-prepend">
            
          </div>
          <input
          className="form-control"
          placeholder="Search Name"
          aria-label="Search"
          onChange={e => context.handleSearchChange(e)}
        />
        </div>
   
  );
}
export default SearchName;
