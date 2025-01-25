import React from 'react';
import Skills from '../components/Skills';
import ProjectsList from '../components/Projects_list'
import '../styles/Home.sass'
import imagePC from '../assets/pc.webp'


const Home = () => {
    return (
        <div className='home-content'>
            <div className='Welcome'>
            {/* <h1 className='Welcome'>Welcome</h1> */}
            <p>Bienvenue sur mon portfolio ! Passionné par le développement web, je conçois des solutions modernes et adaptées à vos besoins.
            <br></br>
            Découvrez mes projets, mon parcours et les compétences que j’ai acquises au fil du temps.
            <br></br>
            N'hésitez pas à me contacter pour toute collaboration ou échange professionnel.</p>
            <img className="vector d'un pc" src={imagePC} alt="photo d'un pc portable" />
            </div>
            {<Skills />}
            {<ProjectsList />}
        </div>
    )
};

export default Home;