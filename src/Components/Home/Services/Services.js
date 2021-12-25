import React from 'react';
import './Services.css';
import UseServices from '../../../Hooks/UseServices';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
// import Newslater from '../Newslater/Newslater';
import bgservices from '../../../image/banner/allwebsite.png';

const Services = () => {
    const [services] = UseServices();
    return (
        <>
            <section className="mb-5" style={{ background: `url(${bgservices})` }}>
                <div className="container shadow-lg px-2 py-3">
                    <h2 className="text-center text-white fw-bolder">Old Age Homes</h2>
                    <hr className="high mx-auto"></hr>
                    <Row xs={1} md={3} className="g-4 mt-3">
                        {
                            services.map(service => (<Service
                                key={service.id}
                                service={service}
                            ></Service>))
                        }
                    </Row>
                </div>
            </section>
            {/* <Newslater></Newslater> */}
        </>
    );
};

export default Services;