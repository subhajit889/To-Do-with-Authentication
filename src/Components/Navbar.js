import React from 'react';
import "../Styles/navbar.css"
import { Link } from 'react-router-dom'; // If using react-router

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">Healthy Lifestyle</Link>
      </div>
      <div className="navbar-middle">
        <Link to="/todos">Saved Todos</Link>
        <Link to="/blogs">Blogs</Link>
      </div>
      <div className="navbar-right">
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
};

export default Navbar;
