import { useInView } from '../hooks/useInView.js'

export default function Section({ className = '', ...props }) {
    const [ref, inView] = useInView()
    return (
        <section
            ref={ref}
            className={`fade-section${inView ? ' fade-section--visible' : ''}${className ? ' ' + className : ''}`}
            {...props}
        />
    )
}
