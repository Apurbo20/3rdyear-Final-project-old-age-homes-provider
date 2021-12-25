import React from 'react';
import './Contact.css';
import { Container, Form, Row, Button } from 'react-bootstrap';
// import Newslater from '../Home/Newslater/Newslater';
import contactImg from '../../image/contact/contact.jpg';
import bgcontact from '../../image/banner/allwebsite.png';

const Contact = () => {
    return (
        <>
            <section className="form-container py-5" style={{ background: `url(${bgcontact})` }}>
                <Container>
                    <Row>
                        <div className="col-12 col-md-8 mx-auto text-white">
                            <h2 className="text-center display-3">
                                Get In Touch!
                            </h2>
                            <p className="text-cyan px-md-5 text-center mb-5">
                                We've answered our most common queries in the FAQs. · If you
                                have a query regarding a Appointment, or wish to change your payment
                                date, you can call us We've answered our users.
                            </p>
                        </div>
                    </Row>
                    <Row>
                        <div className="col-12 col-md-6">
                            <img
                                src={contactImg}
                                alt="contactImg"
                                className="contact-img img-fluid w-100"
                            />
                        </div>
                        <div className="col-12 col-md-6 text-white">
                            <Form>
                                <Row>
                                    <div className="col-12 col-md-6">
                                        <label htmlFor="name" className="fw-semi-bold">
                                            Name
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            className="form-control border-0 shadow-none py-2 mt-2 mb-4"
                                        />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label htmlFor="phone" className=" fw-semi-bold">
                                            Phone
                                        </label>
                                        <input
                                            id="phone"
                                            type="text"
                                            className="form-control border-0 shadow-none py-2 mt-2 mb-4"
                                        />
                                    </div>
                                </Row>
                                <Row>
                                    <div className="col-12">
                                        <label htmlFor="email" className="fw-semi-bold">
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            className="form-control border-0 shadow-none py-2 my-2"
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label
                                            htmlFor="address"
                                            className="fw-semi-bold"
                                        >
                                            Address
                                        </label>
                                        <input
                                            id="address"
                                            type="text"
                                            className="form-control border-0 shadow-none py-2 my-2"
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label
                                            htmlFor="message"
                                            className="fw-semi-bold"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            className="form-control border-0 shadow-none py-2 mt-2 mb-3"
                                            rows="3"
                                        ></textarea>
                                    </div>
                                    <Button variant="info"
                                        onClick={(e) => e.preventDefault()}
                                        type="submit"
                                        className="p-3 fw-bold shadow-none"
                                    >
                                        Send Your Query
                                    </Button>
                                </Row>
                            </Form>
                        </div>
                    </Row>
                </Container>
            </section>
            {/* <Newslater></Newslater> */}
        </>
    );
};

export default Contact;