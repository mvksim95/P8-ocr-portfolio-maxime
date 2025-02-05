import '../styles/Projects_list.sass';
import Booki from '../assets/Projects/booki.webp';
import Bluel from '../assets/Projects/bluel.webp';
import Carducci from '../assets/Projects/carducci.webp';
import Kasa from '../assets/Projects/kasa.webp';
import menuMaker from '../assets/Projects/menuMaker.webp';
import vieuxGrimoire from '../assets/Projects/vieuxGrimoire.webp';
import Card from './Card';


const ProjectsList = () => {
    const projects = [
        { id: 1, image: Booki, title: "Booki", description: "Front End - Academic OCR Project" },
        { id: 2, image: Bluel, title: "Sophie Bluel", description: "Front End - Academic OCR Project" },
        { id: 3, image: Carducci, title: "Nina Carducci", description: "Front End - Academic OCR Project" },
        { id: 4, image: Kasa, title: "Kasa", description: "Front End - Academic OCR Project" },
        { id: 5, image: menuMaker, title: "Menu maker by Qwenta", description: "project manager - Academic OCR Project" },
        { id: 6, image: vieuxGrimoire, title: "Mon vieux grimoire", description: "Fullstack - Academic OCR Project" },
    ];

    return (
        <div className="gallery">
            {projects.map((project) => (
                <Card 
                    key={project.id} 
                    id={project.id} 
                    image={project.image} 
                    title={project.title}
                    description={project.description} 
                />
            ))}
        </div>
    );
};

export default ProjectsList;
