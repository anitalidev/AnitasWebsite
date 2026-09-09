import ProjectCard from "../components/ProjectCard.jsx";
import Section from '../components/Section.jsx'

export default function SelectedProjects({ selector, projects }) {
    return (
        <Section className='section-divider'>
            <h2> Featured Projects </h2>
            <ul className='project-list'>
                {projects.map((project) => {
                    if (selector(project)) {
                        return <ProjectCard key={project.title} {...project} />
                    }
                })}
            </ul>
        </Section>
    )
}
