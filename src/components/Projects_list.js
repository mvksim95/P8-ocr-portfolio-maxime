import '../styles/Projects_list.sass';
import Booki from '../assets/Projects/booki.png';
import Bluel from '../assets/Projects/bluel.png';
import Carducci from '../assets/Projects/carducci.png';
import Kasa from '../assets/Projects/kasa.png';
import menuMaker from '../assets/Projects/menuMaker.png';
import vieuxGrimoire from '../assets/Projects/vieuxGrimoire.png';
import Card from './Card';
import { Links } from 'react-router-dom';

const ProjectsList = () => {
    const projects = [
        { id: 1, image: Booki, title: "Site Booki", description: "Projet du site Booki de la formation OCR" },
        { id: 2, image: Bluel, title: "Site Bluel", description: "Projet de la formation OCR" },
        { id: 3, image: Carducci, title: "Site Carducci", description: "Projet de la formation OCR" },
        { id: 4, image: Kasa, title: "Site Kasa", description: "Projet de la formation OCR" },
        { id: 5, image: menuMaker, title: "Site Menu Maker", description: "Projet de la formation OCR" },
        { id: 6, image: vieuxGrimoire, title: "Site Vieux Grimoire", description: "Projet de la formation OCR", Links: { github: "https://github.com/example/bluel" }
        },
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
