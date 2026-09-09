import NavigationItem from "./NavigationItem.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function NavigationBar({ title, navs }) {
    const location = useLocation();
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className='navbar-wrapper'>
                <nav className='navbar'>
                    <span className='navbar-name'> { title } </span>
                    {navs.map((nav) => (
                        <NavigationItem
                            key={nav.path}
                            selected={location.pathname === nav.path}
                            {...nav}
                        />
                    ))}
                </nav>
            </div>

            <button
                className='mobile-nav-btn'
                onClick={() => setMenuOpen(o => !o)}
                aria-label="Navigation menu"
            >
                ···
            </button>

            {menuOpen && (
                <div className='mobile-nav-menu'>
                    {navs.map(nav => (
                        <a
                            key={nav.path}
                            className={location.pathname === nav.path ? 'selected' : undefined}
                            onClick={() => { navigate(nav.path); setMenuOpen(false); }}
                        >
                            {nav.label}
                        </a>
                    ))}
                </div>
            )}
        </>
    )
}
