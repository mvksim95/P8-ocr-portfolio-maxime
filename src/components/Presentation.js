import '../styles/Presentation.sass'


const Presentation = ({ image, altText, title }) => {
    return (
        <div className='Banner'>
            <img src={image} alt={altText} />
            <h2 className='CoverTitle'>{title}</h2>
            <p>Salut, moi c’est Maxime ! 👋
Diplômé de l'école supérieure de photographie EFET à Paris, j'ai d'abord exploré le monde à travers l'objectif, capturant des instants uniques et des émotions authentiques. 🎓📸 
<br/>
<br/>
Mais au fond, j'ai toujours été un geek passionné par la technologie et le web ! Cette passion m'a naturellement conduit vers le développement fullstack JavaScript, où je fusionne mon sens artistique avec des compétences techniques pour créer des expériences utilisateur immersives.
<br/>
<br/>
Que ce soit en concevant des interfaces élégantes avec React ou en développant des backends solides avec Node.js, je m'efforce de transformer des idées en réalités numériques performantes et accessibles.
<br/>
<br/>
🚀 Mon objectif ? Allier créativité et technologie pour concevoir des applications intuitives et sur mesure, répondant aux besoins des utilisateurs.
<br/>
<br/>
💡 Ma philosophie ? Apprendre en continu, partager mes connaissances et collaborer pour créer des solutions à la fois esthétiques et fonctionnelles.
<br/>
<br/>
Si tu souhaites discuter de code, de projets ou simplement échanger, n'hésite pas à me contacter ! 👨‍💻✨
<br/>
<br/>
[Ajoute ici tes liens vers GitHub, LinkedIn, etc.]</p>
        </div>
    );
};

export default Presentation;
