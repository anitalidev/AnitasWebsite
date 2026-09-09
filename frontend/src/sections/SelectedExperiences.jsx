import ExperienceCard from "../components/ExperienceCard.jsx";

export default function SelectedExperiences({ experiences }) {
    const featured = experiences.filter(e => e.featured)
    if (!featured.length) return null
    return (
        <section className='featured-section'>
            <h2> Featured Experiences </h2>
            <ul className='experience-list'>
                {featured.map(exp => (
                    <ExperienceCard key={exp.title} {...exp} />
                ))}
            </ul>
        </section>
    )
}
