import React from 'react';
import { FaGithub, FaLinkedin, FaGlobe, FaUserCircle } from 'react-icons/fa';
import Hero from '../../components/Shared/Home/Hero';
import Maeque from '../../components/Shared/Home/Maeque';
import OrbitSkills from '../../components/Shared/Home/OrbitSkills';

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
                <OrbitSkills></OrbitSkills>
            </div>
        </div>
    );
};

export default Home;