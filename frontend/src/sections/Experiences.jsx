import ExperienceCard from "../components/ExperienceCard.jsx";

export default function Experiences({ id, expRef, title, experiences }) {
    return (
        <section id={ id } className='experienceBlock'>
            <h2 ref={expRef}> { title } </h2>
            <ul className='experience-list'>
                {experiences.map((experience) => (
                    <ExperienceCard key={experience.title} {...experience} />
                ))}
            </ul>
        </section>
    )
}
