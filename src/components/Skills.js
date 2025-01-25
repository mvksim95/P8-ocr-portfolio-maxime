import cssIcon from '../assets/css-icon.svg';  // Importer l'image comme chemin
import expressIcon from '../assets/express-icon.png'
import githubIcon from '../assets/github-icon.svg'
import htmlIcon from '../assets/html-icon.svg'
import javascriptIcon from '../assets/javascript-icon.svg'
import mongodbIcon from '../assets/mongodb-icon.svg'
import nodeJsIcon from '../assets/nodejs-icon.svg'
import reactIcon from '../assets/react-icon.svg'
import sassIcon from '../assets/sass-icon.svg'

import '../styles/Skills.sass'

const Skills = () => {
  return (
    <div className='Skills'>
      <img src={cssIcon} alt="CSS Icon" className="logo-icon" />
      <img src={htmlIcon} alt="html 5 Icon" className="logo-icon" />
      <img src={javascriptIcon} alt="javascript Icon" className="logo-icon" />
      <img src={sassIcon} alt="Sass Icon" className="logo-icon" />
      <img src={reactIcon} alt="React.js Icon" className="logo-icon" />
      <img src={nodeJsIcon} alt="node.Js Icon" className="logo-icon" />
      <img src={expressIcon} alt="express.js Icon" className="logo-icon logo-express" />
      <img src={mongodbIcon} alt="mongoDb Icon" className="logo-icon" />
      <img src={githubIcon} alt="github Icon" className="logo-icon" />
    </div>
    
  );
};

export default Skills;