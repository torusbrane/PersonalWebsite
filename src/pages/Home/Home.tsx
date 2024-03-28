import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Make sure the path is correct

const Home = () => {
    return (
        <div className="home-container" style={{ backgroundImage: `url(${'/Forest7.jpg'})`}}>
            <div className="main-text">David Jones Portfolio</div>
            <section id="programs">
                <div className="section-content">
                    <h2 className='section-heading'>Programs</h2>
                    <p className="section-description">These are the works and programs that I've been working on over the months.
                    Data Science is an ever-growing field that requires that we know the basics before we can begin to learn
                    new technologies. This is just some of the work and experience I have gathered along the way.
                        <div className="section-image">
                            <Link to="/programs">
                                <img src="/Code_2.jpg" alt="Programs" />
                            </Link>
                        </div>
                    </p>
                </div>
            </section>
            <section id="about">
                <h2>About</h2>
                <p>Description of About...</p>
                <Link to="/about">Learn More</Link>
            </section>
            <section id="contact">
                <h2>Contact</h2>
                <p>How to get in touch...</p>
                <Link to="/contact">Learn More</Link>
            </section>
        </div>
    );
};


export default Home;
