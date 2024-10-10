import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark top">
            <img src="../images/boots-ezgif.com-webp-to-jpg-converter.jpg" alt="Logo" />

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navMainMenu" aria-controls="navMainMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbarbuttons collapse navbar-collapse" id="navMainMenu">
                <Link to='/' className="nav-item nav-link active">Home</Link>
                <Link to='/campaign' className="nav-item nav-link">Campaign</Link>
                <Link to='/dancesearch' className="nav-item nav-link">DanceSearch</Link>
            </div>

            <p>Hello World!</p>
        </nav>
    );
}

export default Nav;
