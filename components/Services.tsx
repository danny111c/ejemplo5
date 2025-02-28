'use client'

import { useEffect, useState } from 'react'
import { FiTrendingUp, FiImage, FiPenTool, FiEdit } from 'react-icons/fi'

export default function Services() {
  const services = [
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "Marketing Digital",
      description: "Estrategias digitales para potenciar tu presencia online y alcanzar a tu audiencia ideal."
    },
    {
      icon: <FiImage className="w-8 h-8" />,
      title: "Soluciones Gráficas",
      description: "Diseños visuales que comunican con claridad y capturan la esencia de tu marca."
    },
    {
      icon: <FiPenTool className="w-8 h-8" />,
      title: "Creación de Logotipos",
      description: "Identidades visuales memorables que te diferencian en el mercado."
    },
    {
      icon: <FiEdit className="w-8 h-8" />,
      title: "Redacción de Contenidos",
      description: "Textos persuasivos que conectan con tu audiencia y transmiten tu mensaje con eficacia."
    }
  ]

  const [particles, setParticles] = useState<{ top: string; left: string }[]>([])

  useEffect(() => {
    const generateParticles = () => {
      return Array.from({ length: 20 }, () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`
      }))
    }
    setParticles(generateParticles())
  }, [])

  return (
    
    <section id="servicios" className="py-16 bg-white relative overflow-hidden">
      {/* Fondo con gradiente radial */}
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(76,175,80,0.2)_15%,transparent_70%)] pointer-events-none"></div>

      {/* Contenedor de partículas estáticas */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {particles.map((particle, i) => (
          <div 
            key={i} 
            className="absolute bg-green-700 opacity-20 w-3 h-3 rounded-full"
            style={{
              top: particle.top,
              left: particle.left
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-12">
          Nuestros Servicios
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card group relative p-6 bg-[rgb(var(--off-white))] border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center cursor-pointer overflow-hidden
              hover:bg-[linear-gradient(135deg,rgba(76,175,80,0.2)_0%,transparent_100%)] w-72"
            >
              <div className="service-icon">
                <div className="text-primary transition-colors duration-500 group-hover:text-white">
                  {service.icon}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-secondary mb-3 transition-colors duration-300 group-hover:text-primary">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
