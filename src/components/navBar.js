import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";

function NavBar() {
  return (
    <div>
      <Nav pills>
        <NavItem>
          <Link to="/">
            <NavLink>Home</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/about">
            <NavLink>About</NavLink>{" "}
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/contacts">
            {" "}
            <NavLink>Contacts</NavLink>{" "}
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/articles">
            {" "}
            <NavLink>Article List</NavLink>{" "}
          </Link>
        </NavItem>
      </Nav>
    </div>
  );
}

export default NavBar;
