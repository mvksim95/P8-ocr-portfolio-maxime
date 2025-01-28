import '../styles/Presentation.sass'
import { agile, api, crud, cssIcon, expressIcon, feedly, figma, githubIcon, htmlIcon, javascriptIcon, json, jwt, kanban, lighthouse, mongodbIcon, mongoose, multer, nodejsIcon, notion, postman, powerPoint, reactIcon, sassIcon, scrum, swagger, wave, word } from './icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTurnDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';



const Presentation = ({ image, altText, title }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const reactColor = 'rgb(97, 219, 251)'; // Correspond à ta variable Sass $ReactColor
    const fontWeightHover = 500;

    const text = `Hi, I'm Maxime ! A graduate of the EFET School of Photography in Paris, 
    I first explored the world through my lens, capturing unique moments and genuine emotions.
    
    But deep down, I've always been a tech enthusiast and a web geek! This passion naturally led me 
    to fullstack JavaScript development, where I blend my artistic sense with technical skills 
    to create immersive user experiences.
    
    Whether it's designing sleek interfaces with React or building robust backends with Node.js, 
    I strive to turn ideas into high-performance and accessible digital realities.
    
    My goal? To combine creativity and technology to develop intuitive, tailor-made applications 
    that meet users' needs.
    
    My philosophy? To keep learning, share my knowledge, and collaborate to create solutions 
    that are both aesthetic and functional.
    
    If you'd like to talk about code, projects, or just have a chat, feel free to reach out !`
    return (
        <div className='Banner'>
            <div className='presentation'>
                <img src={image} alt={altText} className='profil-picture'/>
                <div className='presentation-content'>
                    <p>
                        {text.split("").map((letter, index) => (
                            <span
                                key={index}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                style={{
                                    color: hoveredIndex === index ? reactColor : 'white',  // Utilisation de la couleur RGB
                                    fontWeight: hoveredIndex === index ? fontWeightHover : 'normal',  // Changement de poids de police
                                    transition: 'color 0.1s ease, font-weight 0.1s ease',  // Transition fluide
                                    cursor: 'default',  // Curseur en flèche
                                    fontWeight: '300'
                                }}
                            >
                                {letter}
                            </span>
                        ))}
                    </p>
                    <div className="social-links">
                        <p>Social media :</p>
                        <a href="https://github.com/mvksim95" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>
                        <a href="https://linkedin.com/in/maxime-tison-2bb15482" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                    </div>
                </div>
            </div>
            <div className='skills'>
                <div className='skills-title'>
                    <p>List of frameworks i had to use in my journey</p>
                    <FontAwesomeIcon className='icon' icon={faTurnDown} />
                </div>
                <div className='Skills-logo'>
                    <img src={cssIcon} alt="CSS Icon" className="logo-icon" />
                    <img src={htmlIcon} alt="HTML 5 Icon" className="logo-icon" />
                    <img src={javascriptIcon} alt="JavaScript Icon" className="logo-icon" />
                    <img src={sassIcon} alt="Sass Icon" className="logo-icon" />
                    <img src={reactIcon} alt="React.js Icon" className="logo-icon" />
                    <img src={nodejsIcon} alt="Node.js Icon" className="logo-icon" />
                    <img src={mongodbIcon} alt="MongoDB Icon" className="logo-icon" />
                    <img src={multer} alt="Multer Icon" className="logo-icon" />
                    <img src={githubIcon} alt="GitHub Icon" className="logo-icon" />
                    <img src={expressIcon} alt="Express.js Icon" className="logo-icon logo-express" />
                    <img src={agile} alt="Agile Icon" className="logo-icon" />
                    <img src={api} alt="API Icon" className="logo-icon" />
                    <img src={crud} alt="CRUD Icon" className="logo-icon" />
                    <img src={mongoose} alt="Mongoose Icon" className="logo-icon" />
                    <img src={feedly} alt="Feedly Icon" className="logo-icon" />
                    <img src={figma} alt="Figma Icon" className="logo-icon" />
                    <img src={json} alt="JSON Icon" className="logo-icon" />
                    <img src={jwt} alt="JWT Icon" className="logo-icon" />
                    <img src={kanban} alt="Kanban Icon" className="logo-icon" />
                    <img src={lighthouse} alt="Lighthouse Icon" className="logo-icon" />
                    <img src={notion} alt="Notion Icon" className="logo-icon" />
                    <img src={postman} alt="Postman Icon" className="logo-icon" />
                    <img src={scrum} alt="Scrum Icon" className="logo-icon" />
                    <img src={swagger} alt="Swagger Icon" className="logo-icon" />
                    <img src={wave} alt="Wave Icon" className="logo-icon" />
                    <img src={powerPoint} alt="PowerPoint Icon" className="logo-icon" />
                    <img src={word} alt="Word Icon" className="logo-icon" />
                </div>
            </div>
        </div>

    );
};

export default Presentation;
