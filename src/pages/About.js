import imageProfil from '../assets/profil.webp'
import Presentation from '../components/Presentation'

const About = () => {
    return (
        <div className='home-content'>
            {<Presentation
                image={imageProfil}
                altText="photo de profil"
            />}
        </div>
    )
};

export default About;