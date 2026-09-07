import Experiences from '../sections/Experiences.jsx'
import Projects from '../sections/Projects.jsx'
import About from '../sections/About.jsx'
import NavigationItem from "../components/NavigationItem.jsx";
import Footer from "../sections/Footer.jsx";
import TitleCard from "../components/TitleCard.jsx";
import NavigateExternal from "../components/NavigateExternal.jsx";

import { useRef } from "react";

export default function MainPage() {
    const navs = {
        'about' : {sectionRef: useRef(null), label: 'About Me'},
        'wexperience' : {sectionRef: useRef(null), label: 'Work Experience'},
        'vexperience' : {sectionRef: useRef(null), label: 'Volunteer Experience'},
        'projects' : {sectionRef: useRef(null), label: 'Personal Projects'},
        'hackathons' : {sectionRef: useRef(null), label: 'Hackathon Projects'},
        'eduAndAwards' : {sectionRef: useRef(null), label: 'Education and Awards'},
        'skills' : {sectionRef: useRef(null), label: 'Skills'},
    }
    const mainContent = useRef(null)

    return (
        <>
            <div className="page-wrapper">
                <div className='layout'>
                    <aside className="sidebar">
                        <TitleCard title='Anita Li' description='UBC Computer Science student and aspiring developer focused on clean design and problem solving.' />
                        <nav>
                            <NavigationItem containerRef={mainContent} {...navs['about']}/>
                            <NavigationItem containerRef={mainContent} {...navs['wexperience']}/>
                            <NavigationItem containerRef={mainContent} {...navs['vexperience']}/>
                            <NavigationItem containerRef={mainContent} {...navs['projects']}/>
                            <NavigationItem containerRef={mainContent} {...navs['hackathons']}/>
                            <NavigationItem containerRef={mainContent} {...navs['eduAndAwards']}/>
                            <NavigationItem containerRef={mainContent} {...navs['skills']}/>
                            <NavigateExternal label='Resume' href='Resume_AnitaLi' />
                        </nav>
                    </aside>
                    <div className='main-content' ref={mainContent}>
                        <About id='about' aboutRef={ navs['about'].sectionRef } title='About Me' content='This is about me...' />
                        <Experiences id='wexperience' expRef={ navs['wexperience'].sectionRef } title='Work Experience' experiences={[
                            {title: "Work 1", description: 'blah blah', tags: ['Tag 1', 'Tag 2']}
                        ]}/>
                        <Experiences id='vexperience' expRef={ navs['vexperience'].sectionRef } title='Volunteer Experience' experiences={[
                            {title: "Volunteer 1", description: 'blah blah', tags: ['Tag 5']}
                        ]}/>
                        <Projects id='projects' projRef={ navs['projects'].sectionRef } title='Projects' projects={[
                            {title: "Project 1", description: 'blah blah', tags: ['Tag 3', 'Tag 4']}
                        ]}/>
                        <Projects id='hackathons' projRef={ navs['hackathons'].sectionRef } title='Hackathons' projects={[
                            {title: "Hackathon Project 1", description: 'blah', tags: ['Tag 4', 'Tag 7', 'Tag 6']}
                        ]}/>
                        <About id='eduAndAwards' aboutRef={ navs['eduAndAwards'].sectionRef } title='Education and Awards' content = 'stuff...' />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}