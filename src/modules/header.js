import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <div><Link to="/">MY LOGO</Link></div>
        <nav>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/edu">EDUCATION</Link>
            </li>
            <li>
              <Link to="/tech">TECHNOLOGY</Link>
            </li>
            <li>
              <Link to="/work">WORK</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </nav>

      </header>
    );
  }
}

export default Header;
