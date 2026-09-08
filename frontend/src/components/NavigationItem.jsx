const offset = 70
import {useNavigate} from "react-router-dom";

/*
function navigate(ref) {
    const y = ref.current.offsetTop - offset
    window.scrollTo({ top: y, behavior: 'smooth' })
}
*/

export default function NavigationItem({ selected, path, label }) {
    const navigate = useNavigate();
    return <a className={ selected ? 'selected' : undefined } onClick={() => navigate(path)}>{label}</a>
}
