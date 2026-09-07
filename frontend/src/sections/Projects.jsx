import ProjectCard from "../components/ProjectCard.jsx";

export default function Projects({ id, title, projects }) {
    return (
        <section id={ id }>
            <h2> { title } </h2>
            <ul>
                {
                    projects.map(
                        (project) => {
                            return <ProjectCard { ...project } />
                        }
                    )
                }
            </ul>
        </section>
    )
}