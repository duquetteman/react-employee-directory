import React from "react";
import SearchName from "./SearchName.js";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
     
      <div className=" navbar-collapse row" id="navbarNav">
      
        <div className="search-area col-10">
          <SearchName />
        </div>
      </div>
    </nav>
  );
}
export default Nav;
