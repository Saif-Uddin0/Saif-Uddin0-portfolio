
import Navbar from './../components/Navbar/Navbar';
import Footer from './../components/Footer/Footer';
import { Outlet } from 'react-router-dom';


const Root = () => {


    return (
        <div className='bg-base-300'>

            <div className=''>
                <div className="absolute top-0 left-0 w-72 h-72 bg-purple-800/30 blur-[120px] rounded-full"></div>
                <div className="absolute top-0 right-0 w-72 h-72 bg-purple-800/30 blur-[120px] rounded-full"></div>
                    <Navbar />
                
                <Outlet />
            </div>
            <div >
                <Footer />
            </div>



        </div>
    );
};

export default Root;