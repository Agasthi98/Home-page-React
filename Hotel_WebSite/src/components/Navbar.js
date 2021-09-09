import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../components/assets/logo1.png'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light py-3">
                <div class="container-fluid">
               
                <img src={logo} style={{ height: '50px', width:'70px', marginLeft:'150px' }} /><a class="navbar-brand nav" href="/" style={{marginLeft:'-10px'}}> SHANGRI-LA</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                
                             <li class="nav-item">
                             <a class="nav-link active" aria-current="page" href='#'><i class="fas fa-user-alt"></i> Sign In</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href='#'>Join Now</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href='#'>Find Reservations</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href='#'><i class="fa fa-globe"></i> English</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href='#'>LKR</a>
                            </li>
                          
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
