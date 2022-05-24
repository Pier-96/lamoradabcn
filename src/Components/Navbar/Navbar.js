import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-mainbg'>
      <NavLink className='navbar-brand navbar-logo' to='/' exact='true'>
        La morada
      </NavLink>

      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportdContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
      >
        <i className='fas fa-bars text-white'></i>
      </button>
    </nav>
  );
};
export default Navbar;
