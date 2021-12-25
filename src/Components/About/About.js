import React from 'react';
import './About.css';
import aboutimg from '../../image/about/about-us-main.jpg';
// import Newslater from '../Home/Newslater/Newslater';

const About = () => {
    return (
        <>
            <section className="about mt-5 mb-5">
                <div className="container">
                    <div className="mb-5">
                        <h1 className="fw-bolder mb-2 text-center">About US</h1>
                        <hr className="high mx-auto" />
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <div className="about-imgs">
                                <img className="about-img img-fluid" src={aboutimg} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="about-text pt-3">
                                <h2 className="fw-bolder">Our Story</h2>
                                <hr className="high-light" />
                                <p className="text-justify text-muted">
                                    Old Age Homes Provider is a secure, happy and relaxed old age homes service that offering a high standard quality homes for care to the elderly. We have placed ourselves in the field of old age  care homes to set a benchmark in  elegant, quality care facilities in Bangladesh. Our old age homes are  kind & sympathetically designed and operated with this in mind.Again we have the top old age home care homes for our beloved elderly peoples betterment and comfort.We offer quality service for our users with 24/7 support team.You can simply surfe our website with simple register or login option and also you can to our old age homes.
                                </p>
                                <div>
                                    <h4 className="fw-bolder mb-3">Our Services</h4>
                                    <p className="fw-bolder mb-2 text-muted text-uppercase">Providing respect and dignity for each resident </p>
                                    <div className="progress mb-2">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '100%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">100%</div>
                                    </div>
                                    <p className="fw-bolder mb-2 text-muted text-uppercase">Providing  medical care to its residents on a 24/7 basis </p>
                                    <div className="progress mb-2">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '99%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">99%</div>
                                    </div>
                                    <p className="fw-bolder mb-2 text-muted text-uppercase">Offering each resident the right to freedom of choice </p>
                                    <div className="progress mb-2">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '90%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">90%</div>
                                    </div>
                                    <p className="fw-bolder mb-2 text-muted text-uppercase">Involving residents’ families with daily life at these homes</p>
                                    <div className="progress mb-2">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '99%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">99%</div>
                                    </div>
                                    <p className="fw-bolder mb-2 text-muted text-uppercase">Treating each person as an individual</p>
                                    <div className="progress mb-2">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '95%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">95%</div>
                                    </div>
                                    <p className="fw-bolder mb-2 text-muted text-uppercase">Providing nursing care to its residents on a 24/7 basis</p>
                                    <div className="progress mb-2">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '100%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">100%</div>
                                    </div>
                                    <p className="fw-bolder mb-2 text-muted text-uppercase">Support team performance</p>
                                    <div className="progress mb-2">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '95%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">95%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Newslater></Newslater> */}
        </>
    );
};

export default About;