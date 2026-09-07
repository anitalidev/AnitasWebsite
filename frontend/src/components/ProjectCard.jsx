export default function ProjectCard({ title, description, tags}) {
    return (
        <div className='project'>
            <h3> { title } </h3>
            <p> { description } </p>
            <div class='project-skills'>
                { tags.map((tag) => { return (
                    <span> { tag } </span>
                )})}
            </div>
        </div>
    )
}