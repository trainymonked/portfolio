import { useLocation } from 'react-router-dom'

import './Header.css'

const Header = () => {
    const location = useLocation()

    return (
        <header>
            <nav>
                <a
                    href='#/'
                    className={location.pathname === '/' ? 'active' : ''}
                >
                    Projects
                </a>
                <a
                    href='#/about'
                    className={location.pathname === '/about' ? 'active' : ''}
                >
                    About
                </a>
                <a
                    href='#/resume'
                    className={location.pathname === '/resume' ? 'active' : ''}
                >
                    Resume
                </a>
            </nav>
        </header>
    )
}

export default Header
