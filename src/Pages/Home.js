import React from 'react';
import { Link } from 'react-router-dom';
import Eid from './Eid/Eid';

const Home = () => {
    return (
        <div className='text-center'>

            <h2 className=' font-mono text-3xl text-orange-500 py-20 font-bold bg-cyan-100' data-aos="zoom-in-up"> Happy Eid Mubarak...</h2 > <br />


            <Link to='/eid' className=' font-bold text-2xl p-3 my-9  border-spacing-5 border-amber-500  mx-8 bg-indigo-500 text-white rounded-md hover:bg-cyan-500'>Eid salami</Link>
            <h4 className='my-5 text-green-600'>Press The button and take your eid bonus please</h4>



        </div >
    );
};

export default Home;