import { useLocation } from 'react-router-dom'

import './Header.css'
import {
  useEffect,
  // useState
} from 'react'

const pages = [
  {
    href: '/',
    title: 'Projects',
    content: 'Personal Projects',
  },
  {
    href: '/about',
    title: 'About',
    content: 'Briefly About Me',
  },
  {
    href: '/resume',
    title: 'Resume',
    content: 'My Resume',
  },
]

const Header = () => {
  const location = useLocation()
  // const [links, setLinks] = useState<{ href: string; title: string; content: string }[]>([])
  // const [current, setCurrent] = useState<string>('')

  useEffect(() => {
    // setLinks(pages.filter(page => page.href !== location.pathname))
    // setCurrent(pages.find(page => page.href === location.pathname)?.content!)
  }, [location.pathname])

  return (
    <header className='container mx-auto flex justify-between mt-4 px-4'>
      <h1 className='text-white text-3xl font-bold pt-2 text-nowrap mb-2'>{pages[0].content}</h1>
      {/* <h1 className='text-white text-3xl font-bold pt-2 text-nowrap mb-2'>{current}</h1> */}
      {/* <nav>
          {links.map(link => {
              return (
                  <a
                      key={link.href}
                      href={'#' + link.href}
                  >
                      {link.title}
                  </a>
              )
          })}
      </nav> */}
    </header>
  )
}

export default Header
