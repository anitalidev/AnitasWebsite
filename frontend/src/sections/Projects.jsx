import ProjectCard from "../components/ProjectCard.jsx";

export default function Projects({ id, projRef, title, projects }) {
    return (
        <section id={ id }>
            <h2 ref={projRef}> { title } </h2>
            <ul className='project-list'>
                {projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </ul>
        </section>
    )
}