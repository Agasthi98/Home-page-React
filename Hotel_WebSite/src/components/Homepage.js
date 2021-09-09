import React from 'react'
import Homecarousal from './Homecarousal'
import { Container, Row, Col } from 'react-bootstrap'
import { DatePicker, Space } from "antd";

import 'antd/dist/antd.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import max from './max.jpg'

import image1 from './assets/homepage/image1.jpg'
import image3 from './assets/homepage/image3.jpg'
import image4 from './assets/homepage/image4.jpg'
import image5 from './assets/homepage/image5.jpg'
import image6 from './assets/homepage/image6.jpg'
import res2 from './assets/offers/res2.jpg'
import room1 from './assets/offers/room3.jpg'
import room2 from './assets/offers/room4.jpg'
import beach from './assets/offers/beach.jpg'
import chef from './assets/offers/chef.jpg'
import home2 from './assets/offers/home2.jpg'


AOS.init();
const { RangePicker } = DatePicker;

const Homepage = () => {
    return (
        <div>
            <Homecarousal />
            <div className="row bs p-3 m-5 dark" data-aos="fade-up"
                data-aos-anchor-placement="center-bottom">
                <div className="col-md-4">
                    <RangePicker style={{ height: "38px", width: "98%", }} format='DD-MM-YYYY' className='m-2' />
                </div>

                <div className="col-md-4">
                    <input
                        type="text"
                        className="form-control i2 m-2"
                        placeholder='Search Rooms'
                    />
                </div>
                <div className="col-md-2">
                    <select className="form-control m-2" >

                        <option value="all">All</option>
                        <option value="Non-Deluxe">Non Deluxe</option>
                        <option value="deluxe">Deluxe</option>

                    </select>
                </div>

                <div className="col-md-2">
                    <button className="bt">SEARCH</button>
                </div>
            </div>

            <hr />


            <center>
                <h1>OUR DESTINATIONS</h1>
                <div class="btn-group">

                    <button type="button" class="btn2 btn-warning dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                        Hambanthota
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                        <li><button class="dropdown-item" type="button">Action</button></li>
                        <li><button class="dropdown-item" type="button">Another action</button></li>
                        <li><button class="dropdown-item" type="button">Something else here</button></li>
                    </ul>
                </div>
            </center>

            <br />

            <Container >
                <Row>
                    <Col md={6} style={{ marginLeft: '50px' }}>
                        <h1>HAMBANTHOTA </h1>
                        <h6>A personal tropical sanctuary that is perfect for escaping the city, Shangri-La Colombo overlooks the Indian Ocean in the heart of the business district with direct access to the most extensive international shopping mall in Sri Lanka, Shangri-La’s own One Galle Face Mall. The hotel offers the finest accommodation in Colombo, an exciting new dining and social scene and the largest and extensive hotel conference and event facilities.</h6>
                        <ul>
                            <br></br>
                            <li><h6>541 rooms and suites</h6></li>
                            <br></br>
                            <li><h6>Unrivalled shopping experience in Sri Lanka’s leading shopping mall </h6></li>
                            <br></br>
                            <li><h6>Shangri-La Cares: Our commitment to your well-being in our care</h6></li>
                        </ul>
                        <br></br>
                        <button className='btn btn-outline-warning'>Learn More</button>

                    </Col>

                    <Col md={5}>
                        <img src={max} style={{ width: "75%", height: "100%", marginLeft: '150px' }} />
                    </Col>
                </Row>
            </Container>

            <br />
            <br />

            <hr />



            <div class="container">
                <h2 style={{ textAlign: 'center' }}>Experience Something New</h2>
                <div class="row row-cols-3">
                    <div class="col"> <img src={image1} style={{ width: "75%", height: "100%", marginLeft: '150px' }} /></div>
                    <div class="col"> <img src={image3} style={{ width: "75%", height: "100%", marginLeft: '40px' }} /></div>
                    <div class="col"> <img src={image4} style={{ width: "75%", height: "100%", marginLeft: '-70px' }} /></div>

                </div>

                <div class="row row-cols-3 mt-3">
                    <div class="col"> <img src={image5} style={{ width: "75%", height: "100%", marginLeft: '150px' }} /></div>
                    <div class="col"> <img src={image6} style={{ width: "75%", height: "100%", marginLeft: '40px' }} /></div>
                    <div class="col"> <img src={image1} style={{ width: "75%", height: "100%", marginLeft: '-70px' }} /></div>

                </div>
            </div>



            <br />
            <br />
            <hr />

            <div className='container mt-2' style={{ marginLeft: '290px' }}>
                <h2 style={{ marginLeft: '340px' }}>OFFERS</h2>
                <div class="row row-cols-1 row-cols-md-3 g-4 mt-2">


                    <div class="col">
                        <div class="card" style={{ width: '250px', height: '400px' }}>
                            <img src={room2} style={{ height: '165px' }} />
                            <div class="card-body">
                                <p class="card-text">Rooms & Suites</p>
                                <h5 class="card-title">From LKR 25,500.00 Average Per Night</h5>
                                <button className='btn btn-outline-warning  mt-5' style={{ width: '80%', marginLeft: '10%' }}>Learn More</button>

                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card" style={{ width: '250px', height: '400px', marginLeft: '-160px' }}>
                            <img src={room1} />
                            <div class="card-body">
                                <p class="card-text">Rooms & Suites</p>
                                <p>01 Feb 2021 - 31 Dec 2021</p>

                                <h5 class="card-title">From LKR 32,078.40 Average Per Night</h5>


                            </div>
                            
                            <button className='btn btn-outline-warning  mb-5' style={{ width: '80%', marginLeft: '10%'}}>Learn More</button>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card" style={{ width: '250px', height: '400px', marginLeft: '-325px' }}>
                            <img src={res2} />
                            <div class="card-body">
                                <h5 class="card-title">Bed & Breakfast</h5>
                                <p class="card-text">Start your day with stunning views of Colombo and daily breakfast.</p>
                                <button className='btn btn-outline-warning  mt-4' style={{ width: '80%', marginLeft: '10%' }}>Learn More</button>
                            </div>
                        </div>
                    </div>





                </div>

            </div>

            <br />
            
        </div>

      






    )
}

export default Homepage
