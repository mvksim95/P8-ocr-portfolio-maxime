import React from 'react';
// import Skills from '../components/Skills';
import ProjectsList from '../components/Projects_list'
import '../styles/Home.sass'



const Home = () => {
    return (
        <div className='home-content'>
            <div className='welcome-content'>
            <span className='welcome'>W</span>
                <div className='Welcome'>
                    <p>elcome to my portfolio !
                        I design modern solutions tailored to your needs.
                        <br></br>
                        Explore my projects, my journey, and the skills I have acquired over time.
                        <br></br>
                        Feel free to contact me for any collaboration or professional exchange.</p>
                    {/* <img className="vector d'un pc" src={imagePC} alt="pc portable design programming" /> */}
                </div>
            </div>
            {/* {<Skills />} */}
            <div className='title'><p>Projects</p></div>
            <div className="gradient-line"></div>
            {<ProjectsList />}
        </div>
    )
};

export default Home;