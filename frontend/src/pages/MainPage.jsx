import Experiences from '../sections/Experiences.jsx'
import Projects from '../sections/Projects.jsx'
import About from '../sections/About.jsx'
import NavigationBar from "../components/NavigationBar.jsx";
import Footer from "../sections/Footer.jsx";
import TitleCard from "../components/TitleCard.jsx";

import about from "../data/about.js";
import volExperiences from "../data/volExperiences.js";
import workExperiences from "../data/workExperiences.js";
import projects from "../data/projects.js";
import hackathonProjects from "../data/hackathonProjects.js";
import education from "../data/education.js";

export default function MainPage() {
    return (
        <>
            <NavigationBar title='ANITA LI'/>
            <div className='main-content'>
                <TitleCard title='Anita Li' description='UBC Computer Science student and aspiring developer focused on clean design and problem solving.' />
                <About id='about' title='About Me' content={about} />
                <Experiences id='wexperience' title='Work Experience' experiences={workExperiences}/>
                <Experiences id='vexperience' title='Volunteer Experience' experiences={volExperiences}/>
                <Projects id='projects' title='Project' projects={projects}/>
                <Projects id='hackathons' title='Hackathons' projects={hackathonProjects}/>
                <About id='eduAndAwards' title='Education and Awards' content={education} />
            </div>
            <Footer />
        </>
    )
}
