import { FaFacebook, FaInstagram, FaLinkedin, FaBehance, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      className="py-8"
      style={{
        background: 'linear-gradient(135deg, #232526, #414345)',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Columna 1: Logo */}
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/images/logo.svg"
              alt="Logo ARTGU"
              className="w-32 mb-4"
              width={128}
              height={128}
            />
          </div>

          {/* Columna 2: Enlaces */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xl font-semibold text-white mb-2">Enlaces Rápidos</h4>
            <div className="w-20 h-0.5 bg-primary mb-4" />
            <ul className="text-white text-lg">
              <li>
                <Link href="/" className="block mb-2 hover:underline">Inicio</Link>
              </li>
              <li>
                <Link href="/services" className="block mb-2 hover:underline">Servicios</Link>
              </li>
              <li>
                <Link href="/about" className="block mb-2 hover:underline">Nuestra Historia</Link>
              </li>
              <li>
                <Link href="/portfolio" className="block mb-2 hover:underline">Portfolio</Link>
              </li>
              <li>
                <Link href="/contact" className="block mb-2 hover:underline">Contacto</Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contáctanos */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xl font-semibold text-white mb-2">Contáctanos</h4>
            <div className="w-20 h-0.5 bg-primary mb-4" />
            <p className="text-white mb-2 flex items-center text-lg">
              <FaPhoneAlt className="text-white mr-2" />
              +549 11 2461 9867
            </p>
            <p className="text-white mb-6 flex items-center text-lg">
              <FaMapMarkerAlt className="text-white mr-2" />
              Ecuador y Argentina
            </p>

            {/* Redes Sociales */}
            <div className="flex justify-center gap-6 mb-4">
              {[
                { href: "https://facebook.com", icon: <FaFacebook /> },
                { href: "https://instagram.com", icon: <FaInstagram /> },
                { href: "https://behance.net", icon: <FaBehance /> },
                { href: "https://linkedin.com", icon: <FaLinkedin /> },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex justify-center items-center bg-white text-gray-600 rounded-full hover:bg-primary hover:text-white transform hover:translate-y-[-4px] transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="my-8 mx-4 border-t-2 border-gray-600" />
        <div className="text-center text-white text-sm mt-4">
          © 2023 ARTGU Agencia de Publicidad. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}