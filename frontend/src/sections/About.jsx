export default function About({ aboutRef, id, title, content }) {
    return (
        <section id={ id }>
            <h2 ref={ aboutRef }> { title } </h2>
            <div class='about'>
                <pre>
                    { content }
                </pre>
            </div>
        </section>
    )
}
