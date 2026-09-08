import NavigationItem from "./NavigationItem.jsx";
import { useLocation } from "react-router-dom";

const navs = [
    { path: '/home', label: 'Home' },
    { path: '/experience', label: 'Experience' },
    { path: '/projects', label: 'Projects' },
    { path: '/education', label: 'Education' },
    { path: '/skills', label: 'Skills' },
]

export default function NavigationBar({ title }) {
    const location = useLocation();

    return (
        <div className='navbar-wrapper'>
            <nav className='navbar'>
                <span className='navbar-name'> { title } </span>
                {
                    navs.map((nav) => (
                        <NavigationItem
                            key={nav.path}
                            selected={location.pathname === nav.path}
                            {...nav}
                        />
                    ))
                }
            </nav>
        </div>
    )
}
