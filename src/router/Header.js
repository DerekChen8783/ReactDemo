import React, { Component } from 'react';
import {
    Link
  } from 'react-router-dom';
import '../css/Header.css';

class Header extends Component {
    render() {
        return (
            <div className="app-header">
                <div className="header-top-container">
                    <p className="app-logo">Logo image</p>
                    <p className="header-search-bar">Search Bar</p>
                </div>
                <div className="nav-bar-container">
                    <ul className="nav-bar">
                        <li><Link to="/" >Home</Link></li>
                        <li><Link to="/about" >About</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;