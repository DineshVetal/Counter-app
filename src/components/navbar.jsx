import React, { Component } from "react";
const NavBar = ({ totalCount }) => {
  console.log("navbar render");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="www.google.com">
        Navbar{" "}
        <span className="badge badge-pill badge-danger badge-sm">
          {totalCount}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;

// class NavBar extends Component {
//   render() {
//     return (

//     );
//   }
// }

// export default NavBar;
