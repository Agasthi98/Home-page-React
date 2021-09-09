import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div>

            <footer className="footer">
                <div className="container1">
                    <div className="row">
                        <div className="footer-col">
                            <h4>Find & Book</h4>
                            <ul>
                                <li><a href="#">Our Destinationss</a></li>
                                <li><a href="#">Find a Reservation</a></li>
                                <li><a href="#">Meetings & Events</a></li>
                                <li><a href="#">Restaurant & Bars</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Golden Circle (GC)</h4>
                            <ul>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Join Golden Circle</a></li>
                                <li><a href="#">Account Overview</a></li>
                                <li><a href="#">The Table from Golden Circle</a></li>
                                <li><a href="#">Programme Overview</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>About US</h4>
                            <ul>
                                <li><a href="#">Our Hotel Brands</a></li>
                                <li><a href="#">Residences</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">lobal Citizenships</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>follow us</h4>
                            <div className="social-links">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer
