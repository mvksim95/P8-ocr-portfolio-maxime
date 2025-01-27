import imageProfil from '../assets/profil.webp'
import imageProfilHover from '../assets/profilHover.webp'
import Presentation from '../components/Presentation'

const About = () => {
    return (
        <div className='home-content'>
            {<Presentation
                image={imageProfil}
                hoverImage={imageProfilHover}
                altText="photo de profil"
            />}
        </div>
    )
};

export default About;