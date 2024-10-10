import React from 'react'; // ES6 js
import {Link} from 'react-router-dom';

function Nav() {
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark top">
            <img src="..\images\boots-ezgif.com-webp-to-jpg-converter.jpg" />


            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navMainMenu" aria-controls="navMainMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                <p>Hello World!</p>
            </button>

            
            <div class="navbarbuttons">
                {/* <Link to=''></> */}
                <Link to='/' className="nav-item nav-link active">Home</Link>
                <Link to='/tweets' className="nav-item nav-link">Tweets</Link>
            </div>
            
        </nav>
    );
}

export default Nav;
