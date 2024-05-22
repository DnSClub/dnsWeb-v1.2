import React from 'react';
import { Link } from "react-router-dom";
import './Nav.css';

function Nav() {
  return (
    // <header className={classes.header}>
    //   <div className={classes.logo}>
    //     &#123;<div className={classes.dns}>dns</div>
    //   </div>
    <header>
      <nav>
        <ul>
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