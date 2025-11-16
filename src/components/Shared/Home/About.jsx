import AboutCard from '../AboutCard';


const About = () => {

    return (
        <div className='max-w-[1400px] mx-auto mt-10 md:mt-20' >
            <AboutCard title="Saif Uddin"
                subtitle="MERN Stack Developer"
              
                dropDelay={0.4}
                href="/about"></AboutCard>
        </div>
    );
};

export default About;