import NavigationBar from "../components/NavigationBar.jsx";
import TitleCard from "../components/TitleCard.jsx";
import projects from "../data/projects.js";
import hackathonProjects from "../data/hackathonProjects.js";
import Projects from "../sections/Projects.jsx";
import Footer from "../sections/Footer.jsx";

export default function Project({ navs }) {
    return (
        <>
            <NavigationBar navs={navs} title='ANITA LI'/>
            <div className='main-content'>
                <TitleCard title='Anita Li' description='UBC Computer Science student and aspiring developer focused on clean design and problem solving.' />
                <Projects id='projects' title='Project' projects={projects}/>
                <Projects id='hackathons' title='Hackathons' projects={hackathonProjects}/>
            </div>
            <Footer />
        </>
    )
}