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
                <TitleCard title='Projects' description='Personal projects, course work, and hackathons — things I have built and problems I have solved.' />
                <Projects id='projects' title='Project' projects={projects}/>
                <Projects id='hackathons' title='Hackathons' projects={hackathonProjects}/>
            </div>
            <Footer />
        </>
    )
}