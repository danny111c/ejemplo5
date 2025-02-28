import Image from 'next/image'
import ClientParticles from './ClientParticles'

interface HeroProps {
  id?: string;
}

export default function Hero({ id }: HeroProps) {
  return (
    <section id={id} className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-900" />
      <ClientParticles />
      
      <div className="container mx-auto px-4 h-screen flex items-center relative z-10">
        {/* Contenido izquierdo */}
        <div className="flex-1 max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="block mb-4">Marketing Digital que</span>
            <span className="text-primary">Genera Resultados</span>
          </h1>
          
          <p className="text-xl mb-8">
            Impulsamos tu negocio con estrategias personalizadas de diseño y marketing digital
          </p>

          <a 
            href="https://wa.me/5491124619867"
            className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
          >
            <span className="mr-2">📱</span>
            Contactar por WhatsApp
          </a>
        </div>

        {/* Imagen derecha */}
        <div className="hidden lg:block flex-1 relative h-full">
          <div className="absolute bottom-0 right-0 h-[90%] w-full">
            <Image
              src="/images/hero-person.png"
              alt="Marketing Digital"
              className="absolute bottom-0 right-0 h-full w-auto object-contain"
              width={900}
              height={1000}
              style={{ 
                maxWidth: '90%',
                transform: 'translateY(3px)'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}