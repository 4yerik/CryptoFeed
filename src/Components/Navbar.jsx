import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav id="main-nav" className="navbar">
        <Link to="/" className="nav-home">CryptoFeed</Link>
        {/* <i id="main-menu-toggle" className="menu-toggle"></i> */}

        <ul className="nav-links">

          <li className="nav-item">
            <Link to="/advice">Advice</Link>
          </li>
          <li className="nav-item">
            <Link to="/summary">Summary</Link>
          </li>
        </ul>
      </nav>


    );
  }
}

export default Navbar;