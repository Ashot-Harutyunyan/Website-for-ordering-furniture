import './nav.style.scss'
import { useState, useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router'
import { LANGUAGES } from '../../constants.js'
import { useTheme } from '../../ctx/ThemeContext.jsx'
import { useLanguage } from '../../ctx/LanguageContext.jsx'
import { BsMoonStarsFill } from "react-icons/bs"
import { FaSun } from "react-icons/fa6";

function Nav() {

    const [show, setShow] = useState(false)
    const [burgerMenu, setBurgerMenu] = useState(false)
    const [lang, currentCode, handleLang] = useLanguage()
    const [theme, toggleTheme] = useTheme()
    const dropdownRef = useRef(null)

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setShow(false)
            }
        }
        document.addEventListener('mousedown', handleOutsideClick)
        return () => document.removeEventListener('mousedown', handleOutsideClick)
    }, [])

    const handleLanguageSelect = (code) => {
        handleLang(code)
        setShow(false)
    }
    return (
        <nav className={`nav${burgerMenu ? ' open' : ''}`}>
            <div className='container-logo-burger-menu'>
                <div className='container-logo'>
                    <Link to='/'>
                        <img src="/logo.svg" alt="logo" />
                    </Link>
                </div>
                <div className={`burger-menu${burgerMenu ? ' open' : ''}`}
                     onClick={() => setBurgerMenu(!burgerMenu)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <menu>
                {lang.NAV_LINKS.map(({ to, label }) => (
                    <li key={to}>
                        <NavLink to={to}
                            className={({ isActive }) => isActive ? 'active-link' : ''}>
                            {label}
                        </NavLink>
                    </li>
                ))}
            </menu>

            <div className='parent-container-language'>
                <div className={`container-theme-switch${theme === 'light' ? ' light' : ' dark'}`}
                    onClick={toggleTheme}>
                    { theme === 'light'
                        ? <FaSun className='icon-sun'/>
                        : <BsMoonStarsFill/> }
                </div>
                <div ref={dropdownRef} className={`container-language${show ? ' show' : ''}`}
                    onClick={() => setShow(prev => !prev)}>
                    {LANGUAGES.map(({code, src, alt}) => (
                        <div key={code} className={currentCode === code ? 'active' : undefined}
                            onClick={(e) => {
                                if (show) {
                                    e.stopPropagation()
                                    handleLanguageSelect(code)
                                }
                            }}>
                            <img src={src} alt={alt}/>
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Nav