import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { id } = useParams();

  // Exemple de récupération des détails du projet (à adapter selon tes données)
  const projectsDetails = {
    1: { title: "Site Booki", description: "Description du projet Booki..." },
    2: { title: "Site Bluel", description: "Description du projet Bluel..." },
    3: { title: "Site Carducci", description: "Description du projet Carducci..." },
    4: { title: "Site Kasa", description: "Description du projet Kasa..." },
    5: { title: "Site Menu Maker", description: "Description du projet Menu Maker..." },
    6: { title: "Site Vieux Grimoire", description: "Description du projet Vieux Grimoire..." },
  };

  const project = projectsDetails[id];

  if (!project) {
    return <h2>Projet non trouvé</h2>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectDetail;
