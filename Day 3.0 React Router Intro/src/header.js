
import React from 'react';
import {
  Link
} from 'react-router-dom';
const Header = (props) => {
  return (
    <ul>
    <li>
      <Link to="/"> Home </Link>
    </li>
    <li>
      <Link to="/about"> About </Link>
    </li>
    <li>
      <Link to="/teams"> Team </Link>
    </li>
  </ul>
  )
}

export default Header;