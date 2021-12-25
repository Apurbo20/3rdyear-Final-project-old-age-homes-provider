import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = (props) => {
    const { slug, title, short_description, image } = props.blog;
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
                        <div className="d-flex justify-content-center">
                            <Link to={`single-blog/${slug}`}>
                                <Button variant="outline-info" className="fs-6 fw-bolder">Donate Now</Button>
                            </Link>
                        </div>
                    </Card.Footer>
                </Card>
            </Col>
        </div >
    );
};

export default Blog;