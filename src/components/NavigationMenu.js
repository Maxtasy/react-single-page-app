import React from 'react';
import { Link } from "react-router-dom";

export default function Menu({ closeMenu }) {
  return (
    <div>
      <div className="font-bold py-3">
        Menu
      </div>
      <ul>
        <li>
          <Link
            to="/"
            className="text-blue-500 py-3 border-t border-b block"
            onClick={closeMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-blue-500 py-3 border-b block"
            onClick={closeMenu}
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}
