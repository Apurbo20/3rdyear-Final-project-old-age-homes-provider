import React from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
import bgAppointment from '../../image/banner/allwebsite.png';
// import Newslater from '../Home/Newslater/Newslater';

const Appointment = () => {
    const history = useHistory();
    const location = useLocation();
    const redirect = location?.state?.from || "/";
    const handlesubmit = (e) => {
        e.preventDefault();
        Swal.fire(
            "Good job!",
            "Appointment Is SuccessFull!",
            "success"
        )
        setTimeout(() => {
            history.push(redirect);
        }, 3000)
    }
    const { user } = useAuth();
    return (
        <div>
            <section style={{ background: `url(${bgAppointment})` }}>
                <div className="container shadow-lg px-2 py-3 p-md-5 mb-5">
                    <div className="row">
                        <div className="col-m-8 text-white">
                            <h2 className="mb-4 text-center text-white">
                                After Choosing An Old Age Home, Fill This Form !
                            </h2>
                            <Form>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control value={user?.displayName} type="text" placeholder="Enter Name" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control value={user?.email} type="email" placeholder="Enter Email" />
                                    </Form.Group>
                                </Row>

                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control placeholder="Dhanmondi Dhaka" />
                                </Form.Group>


                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Dhaka"
                                        />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>Old Age Home</Form.Label>
                                        <Form.Select defaultValue="Choose...">
                                            <option>Choose An Old Age Home</option>
                                            <option>Probin Nibash BD</option>
                                            <option>Home Elderly Care</option>
                                            <option>Social home Care</option>
                                            <option>Subarta Trust</option>
                                            <option>APON NIBAS OLD HOME</option>
                                            <option>Matrichaya</option>
                                            <option>Milton Home Care [Pvt.] Ltd.</option>
                                            <option>Oboshor: Senior Citizen Health Care</option>
                                            <option>Subarta Care Giving Center</option>

                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridZip">
                                        <Form.Label>Seats</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="01"
                                        />
                                    </Form.Group>
                                </Row>

                                <Form.Group className="mb-3" id="formGridCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Label>Payment</Form.Label>
                                    <Form.Control placeholder="20000 Tk" />
                                </Form.Group>

                                <Button onClick={handlesubmit} variant="info">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Newslater></Newslater> */}
        </div>
    );
};

export default Appointment;