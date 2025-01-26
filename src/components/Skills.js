import { reactIcon, cssIcon, htmlIcon, javascriptIcon, sassIcon, nodejsIcon, mongodbIcon, expressIcon, githubIcon } from './icons';

import '../styles/Skills.sass'

const Skills = () => {
  return (
    <div className='Skills'>
      <img src={cssIcon} alt="CSS Icon" className="logo-icon" />
      <img src={htmlIcon} alt="html 5 Icon" className="logo-icon" />
      <img src={javascriptIcon} alt="javascript Icon" className="logo-icon" />
      <img src={sassIcon} alt="Sass Icon" className="logo-icon" />
      <img src={reactIcon} alt="React.js Icon" className="logo-icon" />
      <img src={nodejsIcon} alt="node.Js Icon" className="logo-icon" />
      <img src={mongodbIcon} alt="mongoDb Icon" className="logo-icon" />
      <img src={expressIcon} alt="express.js Icon" className="logo-icon logo-express" />
      <img src={githubIcon} alt="github Icon" className="logo-icon" />
    </div>
    
  );
};

export default Skills;