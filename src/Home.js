import React, {useState, useEffect} from 'react';
import web1 from "../src/images/img12.png";
import web2 from "../src/images/img1.jpg";
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Common from './Common'

const Home = () => {
    return (
        <>
            {/* <h1>Welcome Home Page</h1> */}
            {/* <section id='header' className='d-flex align-items-center'>
                <div className='container-fluid nav_bg'>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row'>
                            <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                                <h1>Grow your business with <strong className='brand-name'>My World</strong></h1>
                                <h2 className='my-3'>We are the team of talented developer making websites</h2>
                                <div className='mt3'>
                                    <a href='' className='btn btn-outline-primary'>Get Started</a>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img src={web} className="img-fluid animated" alt="home img"/>
                            </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </section> */}

            <Common 
                name="Grow your business with "
                imgsrc={web1} 
                line="This is a content marketing agency offering scalable content marketing services for every business type."
                visit="/about" 
                btname="Get Started"
            />
        </>
    );
};

export default Home;
