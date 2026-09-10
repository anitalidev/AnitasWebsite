import NavigationItem from "./NavigationItem.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4"/>
        <line x1="12" y1="2" x2="12" y2="4"/>
        <line x1="12" y1="20" x2="12" y2="22"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="2" y1="12" x2="4" y2="12"/>
        <line x1="20" y1="12" x2="22" y2="12"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
)

const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
)

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
                        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
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
                        {theme === 'dark' ? <><SunIcon /> Light</> : <><MoonIcon /> Dark</>}
                    </button>
                </div>
            )}
        </>
    )
}
