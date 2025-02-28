import { FaFacebook, FaInstagram, FaLinkedin, FaBehance, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'
import Image from 'next/image'

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
              width={128}  // Ajusta el valor según el tamaño de tu imagen
              height={128} // Ajusta el valor según el tamaño de tu imagen
            />
          </div>

          {/* Columna 2: Enlaces */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xl font-semibold text-white mb-2">Enlaces Rápidos</h4>
            <div className="w-20 h-0.5 bg-primary mb-4" />
            <ul className="text-white text-lg">
              <li>
                <a href="/" className="block mb-2 hover:underline">Inicio</a>
              </li>
              <li>
                <a href="/services" className="block mb-2 hover:underline">Servicios</a>
              </li>
              <li>
                <a href="/about" className="block mb-2 hover:underline">Nuestra Historia</a>
              </li>
              <li>
                <a href="/portfolio" className="block mb-2 hover:underline">Portfolio</a>
              </li>
              <li>
                <a href="/contact" className="block mb-2 hover:underline">Contacto</a>
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
