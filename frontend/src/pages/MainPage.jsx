import Experiences from '../sections/Experiences.jsx'
import Projects from '../sections/Projects.jsx'
import About from '../sections/About.jsx'
import NavigationBar from "../components/NavigationBar.jsx";
import NavigateExternal from "../components/NavigateExternal.jsx";
import Footer from "../sections/Footer.jsx";
import TitleCard from "../components/TitleCard.jsx";

import about from "../data/about.js";
import volExperiences from "../data/volExperiences.js";
import workExperiences from "../data/workExperiences.js";
import projects from "../data/projects.js";
import hackathonProjects from "../data/hackathonProjects.js";
import education from "../data/education.js";

import { useRef } from "react";

export default function MainPage() {
    const navs = {
        'about' : {sectionRef: useRef(null), label: 'About Me'},
        'experience' : {sectionRef: useRef(null), label: 'Experience'},
        'projects' : {sectionRef: useRef(null), label: 'Projects'},
        'eduAndAwards' : {sectionRef: useRef(null), label: 'Education and Awards'},
        'skills' : {sectionRef: useRef(null), label: 'Skills'},
    }

    return (
        <>
            <NavigationBar navs={navs} title='ANITA LI'/>
            <div className='page-wrapper'>
                <div className='main-content'>
                    <TitleCard title='Anita Li' description='UBC Computer Science student and aspiring developer focused on clean design and problem solving.' />
                    <About id='about' aboutRef={navs['about'].sectionRef} title='About Me' content={about} />
                    <Experiences id='wexperience' expRef={navs['experience'].sectionRef} title='Work Experience' experiences={workExperiences}/>
                    <Experiences id='vexperience' title='Volunteer Experience' experiences={volExperiences}/>
                    <Projects id='projects' projRef={navs['projects'].sectionRef} title='Projects' projects={projects}/>
                    <Projects id='hackathons' title='Hackathons' projects={hackathonProjects}/>
                    <About id='eduAndAwards' aboutRef={navs['eduAndAwards'].sectionRef} title='Education and Awards' content={education} />
                    <NavigateExternal label='Resume' href='Resume_AnitaLi' />
                </div>
            </div>
            <Footer />
        </>
    )
}
