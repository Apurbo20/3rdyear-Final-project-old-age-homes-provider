import React from 'react';
import './Banner.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section className="banner-bg">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 mx-auto">
                        <div className="banner-text text-center">
                            <h1 className="pb-3 fw-bolder">YOU ARE SPECIAL,SO WE CARE YOU IN THAT WAY </h1>
                            <p className="pb-3">Creating the healthy smile on our senior citizen & quality home care for your loved ones.</p>
                            <Link to="/Appointment">
                                <Button className="fs-6 fw-bolder text-white" variant="info">Booking Now</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;