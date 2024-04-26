import React, {  } from "react";
import {NavLink} from 'react-router-dom';
 
export const Header = () =>
{
    return(
        <React.Fragment>
        <nav className="navbar navbar-expand-lg bg-primary" >
          <div className="container">
             <NavLink to="/" className="navbar-brand">LIST</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse ml-72" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                  {/* <li className="nav-item">
                    <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/productlist" className="nav-link"> Product List</NavLink>
                  </li> */}
                  <li className="nav-item float-end">
                    <NavLink to="/addproduct" className="nav-link">Add Product</NavLink>
                  </li>
              </ul>
           </div>
          </div>
        </nav>
        </React.Fragment>
    );
}
export default Header;