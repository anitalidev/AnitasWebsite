import ExperienceCard from "../components/ExperienceCard.jsx";

export default function Experiences({ id, expRef, title, experiences }) {
    return (
        <section id={ id }>
            <h2 ref={expRef}> { title } </h2>
            <ul>
                {
                    experiences.map(
                        (experience) => {
                            return <ExperienceCard key={experience.title} { ...experience } />
                        }
                    )
                }
            </ul>
        </section>
    )
}
