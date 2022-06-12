import React from 'react';
import AboutMe from './AboutMe';
import Available from './Available';
import Projects from './Projects';
import Cetagory from './Cetagory';
import Skills from './Skills';
import Bennar from './Bennar';

const Home = () => {
    return (
        <div>
            <Bennar></Bennar>
            <Projects></Projects>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Cetagory></Cetagory>
            <Available></Available>
            
        </div>
    );
};

export default Home;