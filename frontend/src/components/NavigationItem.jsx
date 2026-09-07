const offset = 70

function navigate(ref) {
    const y = ref.current.offsetTop - offset
    window.scrollTo({ top: y, behavior: 'smooth' })
}

export default function NavigationItem({ sectionRef, label }) {
    return <a onClick={() => navigate(sectionRef)}>{label}</a>
}
