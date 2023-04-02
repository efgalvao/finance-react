import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>
        Brand
      </div>
      <div>
        <ul>
          <Link to='/'>Home</Link>

          <Link to='/login'>Login</Link>

          <Link to='/logout'>Log Out</Link>

          <Link to='/signup'>Signup</Link>

          <Link to='/welcome'>Welcome</Link>

          <Link to='/accounts'>Accounts</Link>

        </ul>
      </div>
    </nav>
  )
}

export default Navbar
