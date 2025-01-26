import '../styles/Presentation.sass'


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
            </div>
        </div>

    );
};

export default Presentation;
