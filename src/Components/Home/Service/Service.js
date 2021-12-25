import React from 'react';
import './Service.css';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { slug, title, short_description, image } = props.service;
    return (
        <div>
            <Col>
                <Card className="service-card">
                    <div className="overflow-hidden">
                        <Card.Img variant="top" src={image} id="cardimg" />
                    </div>
                    <Card.Body className="service-body">
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {short_description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <div className="d-flex justify-content-between">
                            <Link to={`/single-service/${slug}`}>
                                <Button variant="outline-info" className="fs-6 fw-bolder">See Details</Button>
                            </Link>
                            <Link to="/Appointment">
                                <Button variant="outline-info" className="fs-6 fw-bolder">Book Now</Button>
                            </Link>
                        </div>
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default Service;