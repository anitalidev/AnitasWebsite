import ProjectCard from "../components/ProjectCard.jsx";
import Section from '../components/Section.jsx'

export default function Projects({ id, projRef, title, projects }) {
    return (
        <Section id={id}>
            <h2 ref={projRef}> {title} </h2>
            <ul className='project-list'>
                {projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </ul>
        </Section>
    )
}
