import imageProfil from '../assets/profil_circle.png'
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