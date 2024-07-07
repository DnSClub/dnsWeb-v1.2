import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <header>
      <nav>
        <ul className='flex justify-end gap-12 p-6 text-white text-2xl'>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/projects">projects</Link>
          </li>
          <li>
            <Link to="/contacts">contacts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
