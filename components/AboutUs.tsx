'use client'

import Image from "next/image";
import { useRef, useEffect, useState } from "react";

interface AboutUsProps {
  id?: string;
}

export default function AboutUs({ id }: AboutUsProps) {
  const textRef = useRef<HTMLDivElement>(null);
  const [textHeight, setTextHeight] = useState(0);

  useEffect(() => {
    if (textRef.current) {
      setTextHeight(textRef.current.clientHeight);
    }
  }, []);

  return (
    <section id={id} className="py-16 bg-white relative z-10 mb-3">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-start gap-16 md:gap-20">
        
        {/* Texto - Izquierda (Ancho corregido) */}
        <div ref={textRef} className="md:w-[45%] lg:w-[40%] space-y-6 text-lg md:text-xl leading-relaxed md:leading-loose">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary relative pb-4 
              after:content-[''] after:absolute after:bottom-0 after:left-0 
              after:w-20 after:h-1 after:bg-gradient-to-r 
              after:from-[rgb(var(--primary-color))] 
              after:to-[rgb(var(--primary-light))] after:rounded-sm">
            Nuestra Historia
          </h2>
          <p className="text-gray-700">
            ARTGU nació de la pasión por el diseño y la comunicación visual, fundada por José Luis Mendoza, Diseñador Gráfico especializado en comunicación visual.
          </p>
          <p className="text-gray-700">
            Lo que comenzó como un emprendimiento personal en una imprenta local, evolucionó a una agencia integral de publicidad con presencia internacional.
          </p>
          <p className="text-gray-700">
            Hoy, ARTGU se ha consolidado como un referente en el ámbito publicitario entre Ecuador y Argentina.
          </p>
          <p className="text-gray-700">
            Nuestra misión es transformar ideas en soluciones visuales que generen impacto real para nuestros clientes.
          </p>
        </div>

        {/* Contenedor Imagen - Derecha (Ancho corregido) */}
        <div className="relative w-full md:w-[55%] lg:w-[60%] flex justify-center" style={{ height: textHeight }}>
          <div className="absolute top-0 w-full max-w-[450px] aspect-[3/4] rotate-[-3deg]">
            <div className="absolute inset-0 bg-gradient-to-b from-[rgb(var(--primary-light))] to-[rgb(var(--primary-color))] rounded-2xl shadow-lg" />
            <div className="absolute inset-0 flex items-center justify-center p-[4%]">
              <div className="relative w-full h-full rounded-xl overflow-hidden transition-transform duration-300 rotate-3 hover:rotate-0">
                <Image
                  src="/images/historia.jpg"
                  alt="Nuestra Historia"
                  fill
                  className="object-cover rounded-xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
