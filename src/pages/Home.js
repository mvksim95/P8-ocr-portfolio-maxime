import React from 'react';
import Skills from '../components/Skills';
import ProjectsList from '../components/Projects_list'
import '../styles/Home.sass'


const Home = () => {
    return (
        <div className='home-content'>
            <h1 className='Welcome'>Welcome</h1>
            {<Skills />}
            {<ProjectsList />}
        </div>
    )
};

export default Home;