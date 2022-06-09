import React from 'react';
import AboutMe from './AboutMe';
import Available from './Available';
import Projects from './Projects';
import Cetagory from './Cetagory';

const Home = () => {
    return (
        <div>
            <AboutMe></AboutMe>
            <Projects></Projects>
            <Cetagory></Cetagory>
            <Available></Available>
            
        </div>
    );
};

export default Home;