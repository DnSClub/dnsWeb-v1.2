import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <header>
      <nav className="pt-8">
        <ul className="flex justify-end gap-6 md:gap-12 p-6 mb-8 text-white text-lg md:text-2xl backdrop-blur-2xl bg-white/15 w-[90%] md:w-2/3 mx-auto rounded-2xl">
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
