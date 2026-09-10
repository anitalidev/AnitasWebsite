import NavigationItem from "./NavigationItem.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function NavigationBar({ title, navs }) {
    const location = useLocation();
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) return savedTheme;
        return 'light';
    });
    const menuRef = useRef(null);
    const btnRef = useRef(null);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        if (!menuOpen) return;
        function handleClick(e) {
            if (!menuRef.current?.contains(e.target) && !btnRef.current?.contains(e.target)) {
                setMenuOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, [menuOpen]);

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
                    <button
                        className='theme-toggle'
                        onClick={() => setTheme(current => current === 'dark' ? 'light' : 'dark')}
                        aria-label="Toggle color theme"
                        type="button"
                    >
                        <span aria-hidden="true">{theme === 'dark' ? '☀️' : '🌙'}</span>
                        <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
                    </button>
                </nav>
            </div>

            <button
                ref={btnRef}
                className='mobile-nav-btn'
                onClick={() => setMenuOpen(o => !o)}
                aria-label="Navigation menu"
            >
                ···
            </button>

            {menuOpen && (
                <div ref={menuRef} className='mobile-nav-menu'>
                    {navs.map(nav => (
                        <a
                            key={nav.path}
                            className={location.pathname === nav.path ? 'selected' : undefined}
                            onClick={() => { navigate(nav.path); setMenuOpen(false); }}
                        >
                            {nav.label}
                        </a>
                    ))}
                    <button
                        className='mobile-theme-toggle'
                        onClick={() => setTheme(current => current === 'dark' ? 'light' : 'dark')}
                        type="button"
                    >
                        {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
                    </button>
                </div>
            )}
        </>
    )
}
