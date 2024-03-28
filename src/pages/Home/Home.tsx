import React from 'react';
import './Home.css'; // Make sure the path is correct

const Home = () => {
    return (
        <div className="home-container" style={{ backgroundImage: `url(${'/Forest7.jpg'})`}}>
            <div className="main-text">David Jones Portfolio</div>
        </div>
    );
};

export default Home;
