import React from 'react';
import { Row } from 'react-bootstrap';
import UseBlog from '../../Hooks/UseBlog';
import Blog from '../Blog/Blog';
// import Newslater from '../Home/Newslater/Newslater';
import bgblog from '../../image/banner/allwebsite.png';

const Blogs = () => {
    const [blogs] = UseBlog();  //distruction
    return (   
        <>
            <section className="mb-5" style={{ background: `url(${bgblog})` }}>
                <div className="container shadow-lg px-2 py-3">
                    <h2 className="text-center fw-bolder text-white">Donate To Mankind</h2>
                    <hr className="high mx-auto"></hr>
                    <Row xs={1} md={3} className="g-4 mt-3">
                        {
                         blogs.map(bl => (<Blog
                                key={bl.id}
                                blog={bl}
                            ></Blog>))
                        }
                    </Row>
                </div>
            </section>
            {/* <Newslater></Newslater> */}
        </>
    );
};

export default Blogs;