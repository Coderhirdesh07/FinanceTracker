import React, { useState } from 'react';
import favicon from '../../assets/react.svg';
import { Link, NavLink } from 'react-router-dom';
function Header() {
  return (
    <div className="flex flex-row justify-between p-1 bg-gray-300">
      <div className="flex flex-row justify-between p-1 gap-2">
        <img src={favicon} alt="Finace app" />
        <p className="text-xl align-middle">Finance Tracker</p>
      </div>

      {/* <div className="flex flex-row justify-center gap-2 p-2">
        <ul>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200
             ${isActive ? 'text-orange-700' : 'text-gray-700'} border-b
             border-gray-100 hover:bg-gray-50 
             lg-hover:bg-transparent lg:border-0
            hover:text-orange-700 lg:p-0`
            }
          >
            Home
          </NavLink>
        </ul>
      </div> */}

      <div className="flex flex-row justify-evenly p-2 gap-2">
        <Link to="/login" className="bg-blue-400 border-r-2 rounded p-2">
          Login
        </Link>
        <Link to="/signup" className="text-xl text-cyan-500">
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default Header;
