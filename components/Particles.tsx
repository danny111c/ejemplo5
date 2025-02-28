'use client'

import { useEffect, useRef } from 'react'

type Particle = {
  x: number
  y: number
  radius: number
  color: string
  velocity: { x: number; y: number }
  alpha: number
  draw: () => void
  update: () => void
}

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Configuración inicial
    const particles: Particle[] = []
    const particleCount = 30
    const colors = ['#4CAF50', '#388E3C', '#C8E6C9']
    const maxRadius = 4
    const minRadius = 1

    // Clase de partícula (renombrada a ParticleClass)
    class ParticleClass {
      x: number
      y: number
      radius: number
      color: string
      velocity: { x: number; y: number }
      alpha: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * (canvas.height * 0.8) + (canvas.height * 0.2)
        this.radius = Math.random() * (maxRadius - minRadius) + minRadius
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.velocity = {
          x: (Math.random() - 0.5) * 0.5,
          y: (Math.random() - 0.5) * 0.5
        }
        this.alpha = Math.random() * 0.5 + 0.3
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.alpha
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.restore()
      }

      update() {
        this.x += this.velocity.x
        this.y += this.velocity.y

        // Rebote en los bordes
        if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) {
          this.velocity.x = -this.velocity.x
        }
        if (this.y - this.radius < canvas.height * 0.2 || this.y + this.radius > canvas.height) {
          this.velocity.y = -this.velocity.y
        }

        // Desvanecimiento aleatorio
        if (Math.random() < 0.005) {
          this.alpha = Math.random() * 0.5 + 0.3
        }
      }
    }

    // Inicialización de partículas
    function init() {
      particles.length = 0
      for (let i = 0; i < particleCount; i++) {
        particles.push(new ParticleClass())
      }
    }

    // Animación
    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })
      requestAnimationFrame(animate)
    }

    // Manejo de redimensionamiento
    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      init()
    }

    // Configuración inicial
    resize()
    window.addEventListener('resize', resize)
    animate()

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ pointerEvents: 'none' }}
    />
  )
}
