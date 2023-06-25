import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/books">Books</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">About Malcolm</Link>
        </li>
        <li className="nav-item">
          <Link to="/events">Events</Link>
        </li>
        <li className="nav-item">
          <Link to="/podcasts">Podcasts</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
