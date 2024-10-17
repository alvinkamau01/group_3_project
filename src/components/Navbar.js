import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ user }) {
  return (
    <nav className="navbar">
      <h1>Real Estate</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        {user?.role === "agent" && (
          <>
            <li><Link to="/add-property">Add Property</Link></li>
          </>
        )}
        {user ? (
          <li><Link to="/logout">Logout</Link></li>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
