import NavigationItem from "./NavigationItem.jsx";
import { useLocation } from "react-router-dom";

export default function NavigationBar({ title, navs }) {
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
