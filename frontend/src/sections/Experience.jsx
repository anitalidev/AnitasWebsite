import ExperienceCard from "../components/ExperienceCard.jsx";

export default function Experience({ id, title, experiences }) {
    return (
        <section id={ id }>
            <h2> { title } </h2>
            {
                experiences.map(
                    (experience) => {
                        return <ExperienceCard { ...experience } />
                    }
                )
            }
        </section>
    )
}
