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
      description: `Complete user interface integration using HTML and CSS based on Figma mockups. Implementation of a responsive layout adapted for desktop, tablet, and mobile screens. Ensuring best practices in accessibility and performance optimization (image weight, code structure).`
      ,
      difficulty: `Challenges encountered :
Integrating mockups with attention to the designer’s specifications,
Setting up clean and maintainable code structure,
Handling responsiveness across different devices (desktop, tablet, mobile).`,
      learning: `Key learnings :
Mastery of CSS grids and flexbox for adaptive layout,
Effective use of media queries to ensure multi-device compatibility,
Importance of organizing code with clear class names and a logical HTML/CSS structure.`,
      image: bookiImage,
      link: 'https://github.com/mvksim95/P2_Booki_Tison_Maxime'
    },
    2: {
      title: "Sophie Bluel Website",
      role: `Role : Frontend Developer`,
      description: `Development of an authentication system with credential verification and session management via localStorage. Implementation of interactive modals for project management (adding, deleting) using JavaScript and API calls to dynamically update the gallery.`,
      difficulty: `Challenges encountered:
Implementing a dynamic gallery with user interaction.
Managing modals with the ability to switch between them.
Validating and handling errors during authentication and form submissions.`,
      learning: `Key learnings:
Dynamic manipulation of the DOM using JavaScript.
Event handling, smooth transitions, and animations.
Using localStorage to securely store authentication data.`,
      image: bluelImage,
      link: 'https://github.com/mvksim95/P3-Buet-OCR-'
    },
    3: {
      title: "Nina Carducci Website",
      role: `Role : Frontend Developer`,
      description: `Debugging and optimization
  Complete site audit and optimization by improving accessibility, SEO, and best development practices. Analysis and correction of errors using tools such as Lighthouse and WAVE Extension Tool to ensure compliance with web standards. Implementation of semantic tags and structured data with schema.org for better search engine ranking and content understanding.`,
      difficulty: ` Challenges encountered:
Identifying and fixing errors affecting site functionality.
Improving loading performance (heavy images, blocking scripts).
Optimizing accessibility based on WCAG recommendations.`,
      learning: `Key learnings:
Advanced use of debugging tools (browser DevTools).
Resource optimization (lazy loading, image compression).
Importance of ARIA tags and proper title hierarchy for accessibility.`,
      image: carducciImage,
      link: 'https://github.com/mvksim95/P4-OCR-Carducci'
    },
    4: {
      title: "Kasa Website",
      role: `Role : Frontend React Developer`,
      description: `Design and development of the interface using React.js with route management via React Router. Project breakdown into reusable components and data management from a JSON file to dynamically display housing information. Implementation of interactive features such as an image carousel and collapses.`,
      difficulty: `Challenges encountered:
Creating modular and reusable components in React.
Managing navigation with parameterized routes using React Router.
Integrating API calls and handling asynchronous data.`,
      learning: `Key learnings:
Developing dynamic user interfaces with well-structured components.
Effective management of props and state for seamless component communication.
Using React Router for conditional navigation and dynamic pages.`,
      image: kasaImage,
      link: 'https://github.com/mvksim95/P5-OCR-KASA'
    },
    5: {
      title: "Menu Maker by Qwenta Website",
      role: `Role : Project Manager`,
      description: `Planning and managing the application development, ensuring goals and deadlines are met. Project organization using a Kanban board on Notion, task breakdown into User Stories, and tracking sprint progress. Team coordination, drafting of technical and functional specifications, and preparing sprint reviews to validate deliverables. Presentation of strategic choices and support in implementing best practices.`,
      difficulty: `Challenges encountered:
Clearly defining roles and responsibilities for each team member.
Effective communication between technical and non-technical teams.
Handling unexpected issues and adjusting the project timeline.`,
      learning: `Key learnings:
Importance of writing precise and understandable technical specifications.
Using project management tools like Notion and Kanban boards.
Ability to anticipate risks, prioritize tasks, and adapt during the project.`,
      image: menuMakerImage,
      link: 'https://github.com/mvksim95/P7-OCR-QWENTA'
    },
    6: {
      title: "Mon Vieux Grimoire Website",
      role: `Role : Fullstack Developer`,
      description: `Full development of the website with a backend architecture using Node.js, Express, and MongoDB. Implementation of REST API routes for book and user management, with a strong focus on data validation and security (JWT, bcrypt). On the frontend side, integration of the user interface in React.js, including a dynamic book display system and an interactive carousel. Performance optimization and adherence to best practices in accessibility and SEO.`,
      difficulty: `Challenges encountered:
Setting up an Express server and connecting to a MongoDB database.
Managing routes and HTTP requests for CRUD operations.
Implementing security measures, including data validation and route protection.`,
      learning: `Key learnings:
Designing a modular and clean backend architecture.
Mastery of CRUD operations with MongoDB and user input validation.
Implementing middleware for security (authentication, data validation).`,
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
        <a href={project.link} className="gitIcon" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
      <div className="gradient-line"></div>
      <p className="role">{project.role}</p>
      <p className="description">{project.description}</p>
      <p className="description">{project.difficulty}</p>
      <p className="description">{project.learning}</p>
      <img src={project.image} alt={project.title} className="picture" />
    </div>
  );
};

export default ProjectDetail;
