/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Menu from './Menu';
import './style.css';

function Navbar() {
  return (
    <div id="dv-navbar">
      <label id="label-navbar-header">Malcolm Gladwell</label>
      <Menu />
    </div>
  );
}

export default Navbar;
