'use client';

import { useState } from 'react';
import Image from 'next/image';

// Datos de ejemplo para los proyectos
const projects = [
  { id: 1, category: 'branding', title: 'Rediseño de Marca', description: 'Branding corporativo', image: '/images/img1.jpg' },
  { id: 2, category: 'digital', title: 'Campaña Digital', description: 'Estrategia de redes sociales', image: '/images/img2.jpg' },
  { id: 3, category: 'grafico', title: 'Catálogo de Productos', description: 'Diseño editorial', image: '/images/img3.jpg' },
  { id: 4, category: 'branding', title: 'Identidad Visual', description: 'Manual de marca', image: '/images/img1.jpg' },
  { id: 5, category: 'digital', title: 'Sitio Web Corporativo', description: 'Diseño UX/UI', image: '/images/img2.jpg' },
  { id: 6, category: 'grafico', title: 'Campaña Publicitaria', description: 'Publicidad impresa', image: '/images/img3.jpg' },
];

export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  // Filtrar proyectos según la categoría seleccionada
  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
<section id="portfolio" className="py-16 relative z-0" style={{ 
  background: 'linear-gradient(135deg, #232526, #414345)',
  zIndex: 0 // Añade esto para sincronizar con el contexto
}}>      {/* Círculos concéntricos */}
<div className="absolute inset-0 flex justify-center items-center pointer-events-none">
<div className="circle-outer absolute rounded-full border border-solid border-primary-light"></div>
        <div className="circle-inner absolute rounded-full border border-solid border-primary-light"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Título del portafolio */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8 font-sans">
          Nuestro Portafolio
        </h2>

        {/* Filtros de categoría */}
        <div className="flex justify-center gap-4 mb-8">
          {['all', 'branding', 'digital', 'grafico'].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg text-white transition ${
                filter === category
                  ? 'bg-primary' // Usa tu variable CSS para el color primario
                  : 'bg-gray-700 hover:bg-gray-600'
              } font-sans`}
              onClick={() => setFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(({ id, title, description, image }) => (
            <div
              key={id}
              className="bg-gradient-to-br from-[#414345] to-[#232526] rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 group"
            >
              {/* Imagen del proyecto */}
              <div className="relative w-full h-60 rounded-t-lg overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  layout="fill"
                  className="object-cover"
                />
              </div>

              {/* Contenido de la tarjeta */}
              <div className="p-4 text-white">
                <h3 className="text-xl font-semibold font-sans">{title}</h3>
                <p className="text-gray-400 font-sans">{description}</p>
                <button className="mt-4 w-full px-6 py-2 rounded-full bg-white text-primary transition-all group-hover:bg-primary group-hover:text-light-gray font-sans">
                  Ver Proyecto
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
