import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const Nav1 = () => {
    return (
        <Navbar bg="dark" variant="dark" className="py-1 justify-content-center" >
            <Nav style={{ textIndent: '30px', paddingRight:'30px', fontSize:'12px' }}>
                <li class="nav-item dropdown">
                    <a class="nav-link  active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <strong >ABOUT</strong>
                    </a>
                </li>

                <li class="nav-item dropdown" >
                    <a class="nav-link  active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <strong>ROOMS & SUITS</strong>
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#"><b>WEDDINGS PLANNING</b></a></li>
                        <li><a class="dropdown-item" href="#"><b>MEETINGS</b></a></li>
                    </ul>
                </li>


                <li class="nav-item dropdown" >
                    <a class="nav-link  active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <strong>DINING</strong>
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#"><b>WEDDINGS PLANNING</b></a></li>
                        <li><a class="dropdown-item" href="#"><b>MEETINGS</b></a></li>
                    </ul>
                </li>

                <li class="nav-item dropdown" >
                    <a class="nav-link  active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <strong>EXPERIENCE</strong>
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#"><b>WEDDINGS PLANNING</b></a></li>
                        <li><a class="dropdown-item" href="#"><b>MEETINGS</b></a></li>
                    </ul>
                </li>

                <li class="nav-item dropdown" >
                    <a class="nav-link  active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <strong>EVENT</strong>
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#"><b>WEDDINGS PLANNING</b></a></li>
                        <li><a class="dropdown-item" href="#"><b>MEETINGS</b></a></li>
                    </ul>
                </li>

                < li class="nav-item" >
                    <a class="nav-link active" aria-current="page" href='/weddings'><strong>GALLERY</strong></a>
                </li>

                < li class="nav-item" >
                    <a class="nav-link active" aria-current="page" href='/weddings'><strong>OFFERS</strong></a>
                </li>

                <li class="nav-item dropdown" >
                    <a class="nav-link  active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <strong>MORE</strong>
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#"><b>WEDDINGS PLANNING</b></a></li>
                        <li><a class="dropdown-item" href="#"><b>MEETINGS</b></a></li>
                    </ul>
                </li>

                < li class="nav-item" >
                <button type="button" class="btn btn-outline-secondary" style={{color:'white' , fontSize:'12px'}}><strong>FIND A HOTEL</strong></button>
                </li>


            </Nav>
        </Navbar >
    )
}

export default Nav1
