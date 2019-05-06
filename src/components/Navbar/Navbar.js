import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isAuth }) => (
    <main className="navbar">
        <h1 className="navbar-title"><Link to="/">WorldLiveLinking</Link></h1>
        <div className="menu">
            <ul className="menu-list">
                {isAuth ?
                    <Fragment>
                        <li className="menu-item"> <Link to="/map">Map</Link> </li>
                        <li className="menu-item"> <Link to="/chat">Chat</Link> </li>
                        <li className="menu-item"> <Link to="/profile">Profile</Link> </li>
                    </Fragment>
                    :
                    <Fragment>
                        <li className="menu-item"> <Link to="/signin">Sign In</Link> </li>
                        <li className="menu-item"> <Link to="/signup">Sign Up</Link> </li>
                    </Fragment>
                }
            </ul>
        </div>
    </main>
);

Navbar.propTypes = {
    isAuth: PropTypes.bool.isRequired,
}

Navbar.defaultProps = {
    isAuth: false
}

export default Navbar;
