import ExperienceCard from "../components/ExperienceCard.jsx";

export default function Experiences({ id, title, experiences }) {
    return (
        <section id={ id }>
            <h2> { title } </h2>
            <ul>
                {
                    experiences.map(
                        (experience) => {
                            return <ExperienceCard { ...experience } />
                        }
                    )
                }
            </ul>
        </section>
    )
}
