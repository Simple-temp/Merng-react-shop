import React from 'react';
import Business from './Business';
import Category from './Category';
import Course from './Course';
import FIndMore from './FIndMore';
import Main from './Main';
import StartToday from './StartToday';
import Topics from './Topics';

const Home = () => {
    return (
        <div className='container'>
            <Main/>
            <Course/>
            <Category/>
            <Topics/>
            <StartToday/>
            <Business/>
            <FIndMore/>
        </div>
    );
};

export default Home;