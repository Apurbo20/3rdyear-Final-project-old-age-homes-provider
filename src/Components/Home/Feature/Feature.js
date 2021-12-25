import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Feature.css';
import feature1 from '../../../image/feature/luxury.png';
import feature2 from '../../../image/feature/food.png';
import feature3 from '../../../image/feature/doctor.png';
import feature4 from '../../../image/feature/nurse.png';



const Feature = () => {
    return (
        <section className="feature mb-5">
            <div className="container">
                <div className="row">
                    <CardGroup>
                        <Card className="feaature-card">
                            <Card.Img width="50px" className="mx-auto p-1" src={feature1} />
                            <Card.Body>
                                <Card.Title>Comfort Living Space</Card.Title>
                                <Card.Text>
                                    Each old age home has been furnished with new furniture and every room has its own private balcony.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="feaature-card">
                            <Card.Img className="mx-auto p-1" src={feature2} />
                            <Card.Body>
                                <Card.Title>Home Cooked Food</Card.Title>
                                <Card.Text>
                                    Delicious home cooked food is prepared exclusively in every old age homes.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="feaature-card">
                            <Card.Img className="mx-auto p-1" src={feature3} />
                            <Card.Body>
                                <Card.Title>Regular Doctor Check</Card.Title>
                                <Card.Text>
                                    Regular visit by a general physician to ensure wellness is kept on top priority in old age homes.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="feaature-card">
                            <Card.Img className="mx-auto p-1" src={feature4} />
                            <Card.Body>
                                <Card.Title>Feeding & Bathing</Card.Title>
                                <Card.Text>
                                    Feeding and bathing services provided  on every old age homes.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </div>
            </div>
        </section>
    );
};

export default Feature;