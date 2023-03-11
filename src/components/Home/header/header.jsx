import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="main">
        <div className="header-left">
          <div className="circle">
            <div className="rectangle"></div>
          </div>
          <div className="inside">
            <h2>LEGO LAND</h2>
            <h3 className="red-brick">RED BRICK</h3>
          </div>
        </div>
        <div className="header-right">
          <div className="toy">
            <NavLink to="/">
              <h2 className="h2">Toys</h2>
            </NavLink>
          </div>
          <div className="toy">
            <NavLink to="/Catalog">
              <h2 className="h2">Catalog</h2>
            </NavLink>
          </div>
          <div className="toy">
            <NavLink to="/Characters">
              <h2 className="h2">Characters</h2>
            </NavLink>
          </div>
          <div className="toy">
            <NavLink to="/Brand">
              <h2 className="h2">Brand</h2>
            </NavLink>
          </div>
          <div className="toy">
            <NavLink to="/ENG">
              <h2 className="h2">ENG</h2>
            </NavLink>
          </div>
          <div className="toy">
            <NavLink to="/Alexender">
              <h2 className="h2">Alexender</h2>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;

