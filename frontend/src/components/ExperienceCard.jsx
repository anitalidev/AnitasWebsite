export default function ExperienceCard({ title, description, tags}) {
    return (
        <div className='experience'>
            <h3> { title } </h3>
            <p> { description } </p>
            <div className='experience-skills'>
                { tags.map((tag) => { return (
                    <span> { tag } </span>
                )})}
            </div>
        </div>
    )
}