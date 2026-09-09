import ExperienceCard from "../components/ExperienceCard.jsx";
import Section from '../components/Section.jsx'

export default function Experiences({ id, expRef, title, experiences }) {
    return (
        <Section id={id} className='experienceBlock'>
            <h2 ref={expRef}> {title} </h2>
            <ul className='experience-list'>
                {experiences.map((experience) => (
                    <ExperienceCard key={experience.title} {...experience} />
                ))}
            </ul>
        </Section>
    )
}
