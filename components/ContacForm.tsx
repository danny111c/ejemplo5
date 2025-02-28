'use client';

import { useState, ChangeEvent } from 'react';

import { FaFacebook, FaInstagram, FaLinkedin, FaBehance, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

interface ContactFormProps {
  id?: string;
}

export default function ContactForm({ id }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Corregir: Añadir tipo al evento
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id={id}
      className="py-16"
      style={{
        background: 'radial-gradient(circle at bottom left, rgba(76, 175, 80, 0.2) 0%, transparent 70%)',
      }}
    >
      <div className="container mx-auto px-4">
        {/* Contenido de la izquierda */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="max-w-lg"> {/* Limita el ancho de la columna izquierda */}
            <h2 className="text-3xl font-bold text-gray-600 mb-4">Contáctanos</h2>
            <p className="text-gray-600 mb-6 text-lg">
              Estamos listos para transformar tus ideas en realidad. Ponte en contacto con nosotros y comencemos a crear juntos.
            </p>
            <p className="text-gray-600 mb-2 text-lg flex items-center">
              <FaMapMarkerAlt className="text-primary mr-2" /> Ecuador y Argentina
            </p>
            <p className="text-gray-600 mb-2 text-lg flex items-center">
              <FaPhoneAlt className="text-primary mr-2" /> +549 11 2461 9867
            </p>
            <p className="text-gray-600 mb-6 text-lg flex items-center">
              <FaBehance className="text-primary mr-2" /> behance.net/joseguartamber
            </p>

            {/* Redes sociales */}
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                className="w-10 h-10 flex justify-center items-center bg-white text-gray-600 rounded-full hover:bg-primary hover:text-white transform hover:translate-y-[-4px] transition-all duration-300 ease-in-out"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="https://instagram.com"
                className="w-10 h-10 flex justify-center items-center bg-white text-gray-600 rounded-full hover:bg-primary hover:text-white transform hover:translate-y-[-4px] transition-all duration-300 ease-in-out"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="https://behance.net"
                className="w-10 h-10 flex justify-center items-center bg-white text-gray-600 rounded-full hover:bg-primary hover:text-white transform hover:translate-y-[-4px] transition-all duration-300 ease-in-out"
              >
                <FaBehance className="text-xl" />
              </a>
              <a
                href="https://linkedin.com"
                className="w-10 h-10 flex justify-center items-center bg-white text-gray-600 rounded-full hover:bg-primary hover:text-white transform hover:translate-y-[-4px] transition-all duration-300 ease-in-out"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Envía tu mensaje</h2>
            <form action="https://wa.me/+5491124619867" method="get" target="_blank">
              <input
                type="text"
                name="name"
                placeholder="Tu nombre"
                className="w-full p-3 mb-4 rounded-lg border border-gray-300"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Tu email"
                className="w-full p-3 mb-4 rounded-lg border border-gray-300"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Tu mensaje"
                className="w-full p-3 mb-4 rounded-lg border border-gray-300"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
