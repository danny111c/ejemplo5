'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Efecto para el scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`bg-white fixed w-full z-50 shadow-sm transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
      <div className="relative h-full">
        <nav className="container mx-auto h-full flex items-center justify-between px-4 md:px-10">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.svg"
              alt="Logo ARTGU"
              width={isScrolled ? 100 : 120}
              height={40}
              className={`transition-all duration-300 ${isScrolled ? 'h-8' : 'h-10'}`}
              priority
            />
          </Link>

          {/* Menú Desktop (hidden en mobile) */}
          <div className="hidden md:flex items-center gap-6">
            <NavLinks currentPath={pathname} />
          </div>

          {/* Botón Hamburguesa (solo mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            <div className="space-y-2">
              <span className={`block w-6 h-0.5 bg-current transition-transform ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-current ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-current transition-transform ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </nav>

        {/* Menú Mobile */}
        <div className={`md:hidden absolute top-full w-full bg-white shadow-lg transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="flex flex-col items-center gap-4 p-4">
            <NavLinks currentPath={pathname} mobile onClose={() => setIsOpen(false)} />
          </div>
        </div>

        {/* Borde inferior */}
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-primary" />
      </div>
    </header>
  )
}

function NavLinks({ currentPath, mobile, onClose }: { 
  currentPath?: string
  mobile?: boolean
  onClose?: () => void
}) {
  return (
    <>
      <NavLink href="#inicio" currentPath={currentPath} mobile={mobile} onClose={onClose}>Inicio</NavLink>
      <NavLink href="#servicios" currentPath={currentPath} mobile={mobile} onClose={onClose}>Servicios</NavLink>
      <NavLink href="#historia" currentPath={currentPath} mobile={mobile} onClose={onClose}>Nuestra Historia</NavLink>
      <NavLink href="#portfolio" currentPath={currentPath} mobile={mobile} onClose={onClose}>Portfolio</NavLink>
      <NavLink href="#contacto" currentPath={currentPath} mobile={mobile} onClose={onClose}>Contacto</NavLink>
    </>
  )
}

function NavLink({ href, currentPath, children, mobile, onClose }: { 
  href: string
  currentPath?: string
  children: React.ReactNode
  mobile?: boolean
  onClose?: () => void
}) {
  const isActive = currentPath?.includes(href)

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    onClose?.()
    const targetId = href.replace(/.*#/, '')
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      const header = document.querySelector('header')
      const headerHeight = header?.clientHeight || 80
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY
      
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: 'smooth'
      })
    }
  }

  return (
    <Link
      href={href}
      onClick={handleScroll}
      className={`relative px-4 py-2 text-center ${
        mobile ? 'text-lg w-full' : 'text-base'
      } font-medium text-secondary hover:text-primary transition-colors ${
        isActive ? 'font-semibold text-primary' : ''
      }`}
    >
      {children}
      {isActive && (
        <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary rounded-full" />
      )}
    </Link>
  )
}