import React from 'react'
import { Carousel } from 'react-bootstrap';
import moment from "moment";
import { DatePicker, Space } from "antd";
import 'antd/dist/antd.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Home1 from '../components/assets/home5.jpg'
import Home2 from '../components/assets/home1.jpg'
import Home3 from '../components/assets/home7.jpg'
AOS.init();
const { RangePicker } = DatePicker;

const Homecarousal = () => {




    return (
        <Carousel fade={true} pause={false}>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={Home1}
                    alt="First slide"
                    style={{ height: "500px", objectFit: "cover" }}
                />
                <Carousel.Caption>
                    <h3 style={{color:'white'}}>Extensive and Versatile Events </h3>
                    <p>Discover a large and Versatile Events space in Sri Lanka</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={Home2}
                    alt="Third slide"
                    style={{ height: "500px", objectFit: "cover" }}
                />
                <Carousel.Caption>
                    <h3 style={{color:'white'}}>Extensive and Versatile Events </h3>
                    <p>Discover a large and Versatile Events space in Sri Lanka</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={Home3}
                    alt="Third slide"
                    style={{ height: "500px", objectFit: "cover" }}
                />
                <Carousel.Caption>
                    <h3 style={{color:'white'}}>Extensive and Versatile Events </h3>
                    <p>Discover a large and Versatile Events space in Sri Lanka</p>
                </Carousel.Caption>
            </Carousel.Item>



        </Carousel>
    )
}

export default Homecarousal
