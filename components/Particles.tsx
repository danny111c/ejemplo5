'use client'

import { useEffect, useRef } from 'react'

type Particle = {
  x: number
  y: number
  radius: number
  color: string
  velocity: { x: number; y: number }
  alpha: number
  draw: (ctx: CanvasRenderingContext2D) => void
  update: () => void
}

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current || typeof window === 'undefined') return
    initialized.current = true

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

    class ParticleClass implements Particle {
      x: number
      y: number
      radius: number
      color: string
      velocity: { x: number; y: number }
      alpha: number
      private canvas: HTMLCanvasElement

      constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas
        this.x = Math.random() * this.canvas.width
        this.y = Math.random() * (this.canvas.height * 0.8) + (this.canvas.height * 0.2)
        this.radius = Math.random() * (maxRadius - minRadius) + minRadius
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.velocity = {
          x: (Math.random() - 0.5) * 0.5,
          y: (Math.random() - 0.5) * 0.5
        }
        this.alpha = Math.random() * 0.5 + 0.3
      }

      draw(ctx: CanvasRenderingContext2D) {
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

        if (this.x - this.radius < 0 || this.x + this.radius > this.canvas.width) {
          this.velocity.x = -this.velocity.x
        }
        if (this.y - this.radius < this.canvas.height * 0.2 || this.y + this.radius > this.canvas.height) {
          this.velocity.y = -this.velocity.y
        }

        if (Math.random() < 0.005) {
          this.alpha = Math.random() * 0.5 + 0.3
        }
      }
    }

    const init = () => {
      particles.length = 0
      for (let i = 0; i < particleCount; i++) {
        particles.push(new ParticleClass(canvas))
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(particle => {
        particle.update()
        particle.draw(ctx)
      })
      requestAnimationFrame(animate)
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      init()
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ 
        pointerEvents: 'none',
        width: '100%',
        height: '100%'
      }}
      suppressHydrationWarning
    />
  )
}