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
                                <div className="overlay-text">Click here to see my programs</div>
                            </Link>
                        </div>
                    </p>
                </div>
            </section>
            <section id="about">
                <div className="section-content">
                    <h2 className='section-heading'>About</h2>
                    <p className="section-description-right">I little bit about me, my hobbies, and what my experiences have taught
                    me.
                        <div className="section-image-left">
                            <Link to="/about">
                                <img src="/bottomclose2.png" alt="About" />
                                <div className="overlay-text">Click here to see more information</div>
                            </Link>
                        </div>
                    </p>
                </div>
            </section>
            <section id="contact">
                <div className="section-content">
                    <h2 className='section-heading'>Contact</h2>
                    <p className="section-description">
                        <div className="section-image">
                            <Link to="/contact">
                                <img src="/at.jpg" alt="Contact" />
                                <div className="overlay-text">Click here to see contact information</div>
                            </Link>
                        </div>
                    </p>
                </div>
            </section>
        </div>
    );
};


export default Home;
