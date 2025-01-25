import '../styles/Projects_list.sass'
import Booki from '../assets/Projects/booki.png'
import Bluel from '../assets/Projects/bluel.png'
import Carducci from '../assets/Projects/carducci.png'
import Kasa from '../assets/Projects/kasa.png'
import menuMaker from '../assets/Projects/menuMaker.png'
import vieuxGrimoire from '../assets/Projects/vieuxGrimoire.png'

const ProjectsList = () => {
    return (
        <div className='projects-list'>
            <img src={Booki} alt="Site booki" className="Projects-site" />
            <img src={Bluel} alt="Site Sophie Bluel" className="Projects-site" />
            <img src={Kasa} alt="Site kasa" className="Projects-site" />
            <img src={Carducci} alt="Site Nina Carducci" className="Projects-site" />
            <img src={menuMaker} alt="Site menu Maker by Qwenta" className="Projects-site" />
            <img src={vieuxGrimoire} alt="Site mon vieux grimoire" className="Projects-site" />
        </div>
    );
};

export default ProjectsList;