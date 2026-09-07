export default function About({ id, title, content }) {
    return (
        <section id={ id }>
            <h2> { title } </h2>
            <div class='about'>
                <pre>
                    { content }
                </pre>
            </div>
        </section>
    )
}
