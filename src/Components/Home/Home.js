import React from 'react';
import Banner from './Bannar/Banner';
import Feature from './Feature/Feature';
import './Home.css';
import { Button, Row } from 'react-bootstrap';
import wemedentimg from '../../image/about/about-5.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHouseUser } from '@fortawesome/free-solid-svg-icons'
import Service from './Service/Service';
import UseServices from '../../Hooks/UseServices';
// import Newslater from './Newslater/Newslater';
import bgservice from '../../image/banner/allwebsite.png';

const Home = () => {
    const [services] = UseServices();
    // react fontawesome 
    const user = <FontAwesomeIcon icon={faUser} />
    const houseuser = <FontAwesomeIcon icon={faHouseUser} />
    return (
        <div>
            <Banner></Banner>
            <Feature></Feature>
            <section className="we-medent mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <div className="we-medent-img">
                                <img className="medent-img img-fluid" src={wemedentimg} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="we-medent-text pt-3">
                                <h2 className="fw-bolder">WE ARE OLD AGE HOMES PROVIDER</h2>
                                <hr className="high-light" />
                                <p className="text-justify text-muted">
                                    Our website actually improves our citizens life who are searching for good and comfort living without their families.They live life here like their family. This old age home provider makes all possible activities to ensure the online services of old age homes,it also make our life easier. Forget about uncomfortable social encounters. Our focus is on your overall well being and helping you achieve optimal service of finding perfect old age homes for our senior citizens.
                                </p>
                                <div>
                                    <p className="fw-bolder mb-2 text-muted">LUXURY SERVICE HOMES</p>
                                    <div className="progress mb-2">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '75%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div>
                                    </div>
                                    <p className="fw-bolder mb-2 text-muted">NURSE SERVICE HOMES</p>
                                    <div className="progress mb-2">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '85%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">85%</div>
                                    </div>
                                    <p className="fw-bolder mb-2 text-muted">DOCTOR SERVICE HOMES</p>
                                    <div className="progress mb-2">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '100%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">100%</div>
                                    </div>

                                </div>
                                <div className="pt-3">
                                    <Link to="/about">
                                        <Button variant="info" className="fs-6 fw-bolder text-white">Learn About Us</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-counter mb-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-3 col-sm-6 mb-4">
                            <div className="cards-inner">
                                <span className="fs-1">
                                    {user}
                                </span>
                                <h5>819</h5>
                                <p>Satisfied Clients</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-sm-6 mb-4">
                            <div className="cards-inner">
                                <span className="fs-1">
                                    {houseuser}
                                </span>
                                <h5>9</h5>
                                <p>Renowned Old Age Homes</p>
                            </div>
                        </div>
                        {/* <div className="col-md-6 col-lg-3 col-sm-6 mb-4">
                            <div className="cards-inner">
                                <span className="fs-1">
                                    {clock}
                                </span>
                                <h5>3200</h5>
                                <p>Work Hours</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-sm-6 mb-4">
                            <div className="cards-inner">
                                <span className="fs-1">
                                    {doctor}
                                </span>
                                <h5>30</h5>
                                <p>Spacialist Doctors</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
            <section className="mb-5 mt-5" style={{ background: `url(${bgservice})` }}>
                <div className="container shadow-lg px-2 py-3">
                    <h2 className="text-center text-white fw-bolder">Old Age Homes</h2>
                    <hr className="high mx-auto"></hr>
                    <Row xs={1} md={3} className="g-4 mt-3">
                        {
                            services.slice(0, 6).map(service => (<Service
                                key={service.id}
                                service={service}
                            ></Service>))
                        }
                    </Row>
                </div>
                <div className="text-center mt-3 pb-3">
                    <Link to="/services">
                        <Button variant="info" className="fs-6 fw-bolder text-white">See All Service</Button>
                    </Link>
                </div>
            </section>
            {/* <Newslater></Newslater> */}
        </div>
    );
};

export default Home;