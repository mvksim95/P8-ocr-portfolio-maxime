import { useParams, useNavigate } from "react-router-dom";
import '../styles/projectsDetails.sass'
import bookiImage from '../assets/Projects/bigSize/booki_big.webp';
import bluelImage from '../assets/Projects/bigSize/bluel_big.webp';
import carducciImage from '../assets/Projects/bigSize/carducci_big.webp';
import kasaImage from '../assets/Projects/bigSize/kasa_big.webp';
import menuMakerImage from '../assets/Projects/bigSize/menuMaker_big.webp';
import vieuxGrimoireImage from '../assets/Projects/bigSize/vieuxGrimoire_big.webp';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Exemple de récupération des détails du projet (à adapter selon tes données)
  const projectsDetails = {
    1: {
      title: "Booki Website",
      role: `Role : Frontend Developer`,
      description: `Complete user interface integration using HTML and CSS based on Figma mockups. Implementation of a responsive layout adapted for desktop, tablet, and mobile screens. Ensuring best practices in accessibility and performance optimization (image weight, code structure).`,
      image: bookiImage,
      link: 'https://github.com/mvksim95/P2_Booki_Tison_Maxime'
    },
    2: {
      title: "Sophie Bluel Website",
      role: `Role : Frontend Developer`,
      description: `Development of an authentication system with credential verification and session management via localStorage. Implementation of interactive modals for project management (adding, deleting) using JavaScript and API calls to dynamically update the gallery.`,
      image: bluelImage,
      link: 'https://github.com/mvksim95/P3-Buet-OCR-'
    },
    3: {
      title: "Nina Carducci Website",
      role: `Role : Frontend Developer`,
      description: `Debugging and optimization
  Complete site audit and optimization by improving accessibility, SEO, and best development practices. Analysis and correction of errors using tools such as Lighthouse and WAVE Extension Tool to ensure compliance with web standards. Implementation of semantic tags and structured data with schema.org for better search engine ranking and content understanding.`,
      image: carducciImage,
      link: 'https://github.com/mvksim95/P4-OCR-Carducci'
    },
    4: {
      title: "Kasa Website",
      role: `Role : Frontend React Developer`,
      description: `Design and development of the interface using React.js with route management via React Router. Project breakdown into reusable components and data management from a JSON file to dynamically display housing information. Implementation of interactive features such as an image carousel and collapses.`,
      image: kasaImage,
      link: 'https://github.com/mvksim95/P5-OCR-KASA'
    },
    5: {
      title: "Menu Maker by Qwenta Website",
      role: `Role : Project Manager`,
      description: `Planning and managing the application development, ensuring goals and deadlines are met. Project organization using a Kanban board on Notion, task breakdown into User Stories, and tracking sprint progress. Team coordination, drafting of technical and functional specifications, and preparing sprint reviews to validate deliverables. Presentation of strategic choices and support in implementing best practices.`,
      image: menuMakerImage,
      link: 'https://github.com/mvksim95/P7-OCR-QWENTA'
    },
    6: {
      title: "Mon Vieux Grimoire Website",
      role: `Role : Fullstack Developer`,
      description: `Full development of the website with a backend architecture using Node.js, Express, and MongoDB. Implementation of REST API routes for book and user management, with a strong focus on data validation and security (JWT, bcrypt). On the frontend side, integration of the user interface in React.js, including a dynamic book display system and an interactive carousel. Performance optimization and adherence to best practices in accessibility and SEO.`,
      image: vieuxGrimoireImage,
      link: 'https://github.com/mvksim95/P6-OCR-LIVRES'
    },
  };


  const project = projectsDetails[parseInt(id)];

  if (!project) {
    return <h2>Projet non trouvé</h2>;
  }

  return (
    <div className="projectsDetails-content">
      <div className="title-content">
        <FontAwesomeIcon
          className='icon'
          icon={faArrowLeft}
          onClick={() => navigate('/')} // Navigue vers la page d'accueil
        />
        <h1 className="title">{project.title}</h1>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
      <div className="gradient-line"></div>
      <p className="role">{project.role}</p>
      <p className="description">{project.description}</p>
      <img src={project.image} alt={project.title} className="picture" />
    </div>
  );
};

export default ProjectDetail;
