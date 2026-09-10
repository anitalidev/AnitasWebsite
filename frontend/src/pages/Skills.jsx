import NavigationBar from '../components/NavigationBar.jsx'
import TitleCard from '../components/TitleCard.jsx'
import Footer from '../sections/Footer.jsx'
import SkillsSection from '../sections/SkillsSection.jsx'
import skills from '../data/skills.js'
import projects from '../data/projects.js'
import hackathonProjects from '../data/hackathonProjects.js'
import workExperiences from '../data/workExperiences.js'
import volExperiences from '../data/volExperiences.js'

const allProjects = [...projects, ...hackathonProjects]
const allExperiences = [...workExperiences, ...volExperiences]

const enrichedSkills = skills.map(skill => {
    const match = t => t.toLowerCase() === skill.name.toLowerCase()
    return {
        ...skill,
        usedIn: {
            projects: allProjects
                .filter(p => p.tags?.some(match))
                .map(p => p.label ?? p.title),
            experiences: allExperiences
                .filter(e => e.tags?.some(match))
                .map(e => e.label ?? e.title),
        }
    }
})

export default function Skills({ navs }) {
    return (
        <>
            <NavigationBar navs={navs} title='ANITA LI' />
            <div className='main-content'>
                <TitleCard title='Skills' description='Technologies and tools I have worked with.' />
                <SkillsSection skills={enrichedSkills} />
            </div>
            <Footer />
        </>
    )
}
