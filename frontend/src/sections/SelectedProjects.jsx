import ProjectCard from "../components/ProjectCard.jsx";

export default function SelectedProjects({ selector, projects }) {
    return (
        <section className='featured-section'>
            <h2> Featured Projects </h2>
            <ul className='project-list'>
                {projects.map((project) => {
                    if (selector(project)) {
                        return <ProjectCard key={project.title} {...project} />
                    }
                })}
            </ul>
        </section>
    )
}