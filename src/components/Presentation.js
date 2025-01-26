import '../styles/Presentation.sass'
import { agile, api, crud, cssIcon, expressIcon, feedly, figma, githubIcon, htmlIcon, javascriptIcon, json, jwt, kanban, lighthouse, mongodbIcon, mongoose, multer, nodejsIcon, notion, postman, powerPoint, reactIcon, sassIcon, scrum, swagger, wave, word } from './icons';


const Presentation = ({ image, altText, title }) => {
    return (
        <div className='Banner'>
            <div className='presentation'>
                <img src={image} alt={altText} />
                <h2 className='CoverTitle'>{title}</h2>
                <p>
                    Hi, I'm Maxime ! A graduate of the EFET School of Photography in Paris, I first explored the world through my lens, capturing unique moments and genuine emotions.
                    <br />
                    <br />
                    But deep down, I've always been a tech enthusiast and a web geek! This passion naturally led me to fullstack JavaScript development, where I blend my artistic sense with technical skills to create immersive user experiences.
                    <br />
                    <br />
                    Whether it's designing sleek interfaces with React or building robust backends with Node.js, I strive to turn ideas into high-performance and accessible digital realities.
                    <br />
                    <br />
                    My goal ? To combine creativity and technology to develop intuitive, tailor-made applications that meet users' needs.
                    <br />
                    <br />
                    My philosophy ? To keep learning, share my knowledge, and collaborate to create solutions that are both aesthetic and functional.
                    <br />
                    <br />
                    If you'd like to talk about code, projects, or just have a chat, feel free to reach out! ✨
                </p>
            </div>
            <div className='skills'>
                <p>List of frameworks i had to use in my journey</p>
                <div className='Skills-logo'>
                    <img src={cssIcon} alt="CSS Icon" className="logo-icon" />
                    <img src={htmlIcon} alt="HTML 5 Icon" className="logo-icon" />
                    <img src={javascriptIcon} alt="JavaScript Icon" className="logo-icon" />
                    <img src={sassIcon} alt="Sass Icon" className="logo-icon" />
                    <img src={reactIcon} alt="React.js Icon" className="logo-icon" />
                    <img src={nodejsIcon} alt="Node.js Icon" className="logo-icon" />
                    <img src={mongodbIcon} alt="MongoDB Icon" className="logo-icon" />
                    <img src={expressIcon} alt="Express.js Icon" className="logo-icon logo-express" />
                    <img src={githubIcon} alt="GitHub Icon" className="logo-icon" />
                    <img src={agile} alt="Agile Icon" className="logo-icon" />
                    <img src={api} alt="API Icon" className="logo-icon" />
                    <img src={crud} alt="CRUD Icon" className="logo-icon" />
                    <img src={feedly} alt="Feedly Icon" className="logo-icon" />
                    <img src={figma} alt="Figma Icon" className="logo-icon" />
                    <img src={json} alt="JSON Icon" className="logo-icon" />
                    <img src={jwt} alt="JWT Icon" className="logo-icon" />
                    <img src={kanban} alt="Kanban Icon" className="logo-icon" />
                    <img src={lighthouse} alt="Lighthouse Icon" className="logo-icon" />
                    <img src={mongoose} alt="Mongoose Icon" className="logo-icon" />
                    <img src={multer} alt="Multer Icon" className="logo-icon" />
                    <img src={notion} alt="Notion Icon" className="logo-icon" />
                    <img src={postman} alt="Postman Icon" className="logo-icon" />
                    <img src={powerPoint} alt="PowerPoint Icon" className="logo-icon" />
                    <img src={scrum} alt="Scrum Icon" className="logo-icon" />
                    <img src={swagger} alt="Swagger Icon" className="logo-icon" />
                    <img src={wave} alt="Wave Icon" className="logo-icon" />
                    <img src={word} alt="Word Icon" className="logo-icon" />
                </div>
            </div>
        </div>

    );
};

export default Presentation;
