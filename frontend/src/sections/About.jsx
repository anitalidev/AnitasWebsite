export default function About({ aboutRef, id, title, children }) {
    return (
        <section id={ id }>
            <h2 ref={ aboutRef }> { title } </h2>
            <div class='about'>
                <pre>
                    { children }
                </pre>
            </div>
        </section>
    )
}
