const offset = 70

function navigate(ref) {
    const y = ref.current.offsetTop - offset
    window.scrollTo({ top: y, behavior: 'smooth' })
}

export default function NavigationItem({ selected, setSelected, sectionRef, label }) {
    return <a className={ selected === label && 'selected'} onClick={() => {
        setSelected(label)
        navigate(sectionRef);
    }}>{label}</a>
}
