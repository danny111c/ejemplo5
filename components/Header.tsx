'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="bg-white fixed w-full z-50 shadow-sm">
      <div className="relative">
        {/* Contenedor del nav con márgenes personalizados */}
        <nav className="h-20 flex items-center justify-between px-10">
          {/* Logo - Izquierda */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/images/logo.svg"
                alt="Logo ARTGU"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Menú - Derecha */}
          <div className="flex items-center gap-6">
            <NavLink href="#inicio" currentPath={pathname}>Inicio</NavLink>
            <NavLink href="#servicios" currentPath={pathname}>Servicios</NavLink>
            <NavLink href="#historia" currentPath={pathname}>Nuestra Historia</NavLink>
            <NavLink href="#portfolio" currentPath={pathname}>Portfolio</NavLink>
            <NavLink href="#contacto" currentPath={pathname}>Contacto</NavLink>
          </div>
        </nav>

        {/* Borde sólido */}
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-primary" />
      </div>
    </header>
  )
}

function NavLink({ href, currentPath, children }: { 
  href: string
  currentPath?: string
  children: React.ReactNode 
}) {
  const isActive = currentPath?.includes(href)

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    const targetId = href.replace(/.*#/, '')
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      const headerHeight = document.querySelector('header')?.clientHeight || 80
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
      className={`relative font-medium text-secondary hover:text-primary transition-colors ${
        isActive ? 'font-semibold text-primary' : ''
      }`}
    >
      {children}
      {isActive && (
        <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full" />
      )}
    </Link>
  )
}