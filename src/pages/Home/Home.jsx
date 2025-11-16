import React from 'react';
import { FaGithub, FaLinkedin, FaGlobe, FaUserCircle } from 'react-icons/fa';
import Hero from '../../components/Shared/Home/Hero';
import Maeque from '../../components/Shared/Home/Maeque';
import OrbitSkills from '../../components/Shared/Home/OrbitSkills';
import Project from '../../components/Shared/Home/Project';
import About from '../../components/Shared/Home/About';

const Home = () => {
    return (
        <div className='bg-base-300 w-full'>
            <div>
                <Hero></Hero>
            </div>
            <div className=''>
                <Maeque></Maeque>
            </div>
            <div>
                <About></About>
            </div>
            <div>
                <OrbitSkills></OrbitSkills>
            </div>
            <div className=''>
                <Project></Project>
            </div>
        </div>
    );
};

export default Home;