const offset = 70
function navigate(ref, container) {
    const y = ref.current.offsetTop - container.offsetTop - offset
    container.scrollTo({ top: y, behavior: 'smooth' })
}

export default function NavigationItem({ sectionRef, containerRef, label }) {
    return <a onClick={ () => navigate(sectionRef, containerRef.current) }> { label } </a>
}
