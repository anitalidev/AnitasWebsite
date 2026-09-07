import Experiences from './sections/Experiences.jsx'
import Projects from './sections/Projects.jsx'
import About from './sections/About.jsx'

export default function App() {
    return (
        <>
            <h1>Anita Li</h1>
            <About id ='about' title='About Me' content='This is about me...'/>
            <Experiences id ='wexperience' title='Work Experience' experiences={[
                { title: "Work 1", description: 'blah blah', tags: ['Tag 1', 'Tag 2'] }
            ]}/>
            <Experiences id ='vexperience' title='Volunteer Experience' experiences={[
                { title: "Volunteer 1", description: 'blah blah', tags: ['Tag 5'] }
            ]}/>
            <Projects id ='projects' title='Projects' projects={[
                { title: "Project 1", description: 'blah blah', tags: ['Tag 3', 'Tag 4'] }
            ]}/>
            <Projects id ='hackathons' title='Hackathons' projects={[
                { title: "Hackathon Project 1", description: 'blah', tags: ['Tag 4', 'Tag 7', 'Tag 6'] }
            ]}/>
            <About id ='Education and Awards' title='Education and Awards' content='stuff'/>
        </>
    )
}