'use client'

import dynamic from 'next/dynamic'

const Particles = dynamic(
  () => import('./Particles'),
  { 
    ssr: false,
    loading: () => (
      <div 
        className="absolute inset-0 z-0" 
        style={{ pointerEvents: 'none' }}
        aria-hidden="true"
      />
    )
  }
)

export default function ClientParticles() {
  return <Particles />
}