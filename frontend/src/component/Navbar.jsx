import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <div className="navbar2">
            <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{margin:"10px", borderRadius:"20px", width:"100%"}}>
                <div class="container-fluid">
                    <h2 style={{fontWeight:"bold"}}>Movie</h2>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page"><Link to='/'>Home</Link></a>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to='/List'>Movie List</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to='/add'>Add Movie</Link>                        
                        </li>
       
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;