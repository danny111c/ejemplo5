'use client'

import { useState, useEffect, useRef } from "react";

export default function TrustIndicators() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [values, setValues] = useState({
    clients: 0,
    projects: 0,
    experience: 0,
    awards: 0
  });

  const finalValues = {
    clients: 100,
    projects: 250,
    experience: 8,
    awards: 15
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateNumbers();
        }
      },
      { threshold: 0.5 } // Se activa cuando el 50% de la sección es visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  function animateNumbers() {
    const duration = 300; // 1 segundo
    const frames = 60; // 60 FPS
    const intervalTime = duration / frames; // Tiempo entre frames
    let currentFrame = 0;

    const interval = setInterval(() => {
      currentFrame++;
      const progress = currentFrame / frames;

      setValues((prevValues) => ({
        clients: Math.round(finalValues.clients * progress),
        projects: Math.round(finalValues.projects * progress),
        experience: Math.round(finalValues.experience * progress),
        awards: Math.round(finalValues.awards * progress)
      }));

      if (currentFrame >= frames) {
        clearInterval(interval);
        setValues(finalValues); // Asegurar que termine con los valores exactos
      }
    }, intervalTime);
  }

  return (
    <section ref={sectionRef} className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          
          {/* Clientes Satisfechos */}
          <div className="p-6 relative">
            <h3 
              className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(45deg, var(--primary-color-hex), var(--primary-light-hex))',
              }}
            >
              {values.clients}
            </h3>
            <p className="text-white font-medium text-xl">
              Clientes Satisfechos
            </p>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-16 w-px bg-white/20" />
          </div>

          {/* Proyectos Completados */}
          <div className="p-6 relative">
            <h3 
              className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(45deg, var(--primary-color-hex), var(--primary-light-hex))',
              }}
            >
              {values.projects}
            </h3>
            <p className="text-white font-medium text-xl">
              Proyectos Completados
            </p>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-16 w-px bg-white/20" />
          </div>

          {/* Años de Experiencia */}
          <div className="p-6 relative">
            <h3 
              className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(45deg, var(--primary-color-hex), var(--primary-light-hex))',
              }}
            >
              {values.experience}
            </h3>
            <p className="text-white font-medium text-xl">
              Años de Experiencia
            </p>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-16 w-px bg-white/20" />
          </div>

          {/* Premios Ganados */}
          <div className="p-6">
            <h3 
              className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(45deg, var(--primary-color-hex), var(--primary-light-hex))',
              }}
            >
              {values.awards}
            </h3>
            <p className="text-white font-medium text-xl">
              Premios Ganados
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
