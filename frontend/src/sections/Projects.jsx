import ProjectCard from "../components/ProjectCard.jsx";

export default function Projects({ id, projRef, title, projects }) {
    return (
        <section id={ id }>
            <h2 ref={projRef}> { title } </h2>
            <ul>
                {
                    projects.map(
                        (project) => {
                            return <ProjectCard key={project.title} { ...project } />
                        }
                    )
                }
            </ul>
        </section>
    )
}