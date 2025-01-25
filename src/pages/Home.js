import React from 'react';
import Presentation from '../components/Presentation'
import Skills from '../components/Skills';
import ProjectsList from '../components/Projects_list'
import '../styles/Home.sass'
import imageProfil from '../assets/profil_circle.png'

const Home = () => {
    return (
        <div className='home-content'>
            {<Presentation
                image={imageProfil}
                altText="photo de profil"
                // title="test"
            />}
            {<Skills />}
            {<ProjectsList />}
        </div>
    )
};

export default Home;