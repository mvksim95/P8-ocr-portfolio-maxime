import React from 'react';
import Skills from '../components/Skills';
import ProjectsList from '../components/Projects_list'
import '../styles/Home.sass'
import imagePC from '../assets/pc.webp'


const Home = () => {
    return (
        <div className='home-content'>
            <div className='Welcome'>
                <p>Welcome to my portfolio !
                    Passionate about web development, I design modern solutions tailored to your needs.
                    <br></br>
                    Explore my projects, my journey, and the skills I have acquired over time.
                    <br></br>
                    Feel free to contact me for any collaboration or professional exchange.</p>
                <img className="vector d'un pc" src={imagePC} alt="pc portable design programming" />
            </div>
            {<Skills />}
            {<ProjectsList />}
        </div>
    )
};

export default Home;