'use client'

import { useEffect, useRef } from 'react'

type Star = {
  x: number
  y: number
  size: number
  speed: number
  baseAlpha: number
  twinkle: number
}

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    let width = 0
    let height = 0
    let stars: Star[] = []
    let raf = 0

    const colors = ['#e8e8f0', '#00ff9f', '#ffe566']

    const setup = () => {
      width = canvas.offsetWidth
      height = canvas.offsetHeight
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.min(120, Math.floor((width * height) / 9000))
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() < 0.85 ? 1 : 2,
        speed: 0.05 + Math.random() * 0.2,
        baseAlpha: 0.3 + Math.random() * 0.6,
        twinkle: Math.random() * Math.PI * 2,
      }))
    }

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height)
      for (const s of stars) {
        if (!reduceMotion) {
          s.y += s.speed
          if (s.y > height) {
            s.y = 0
            s.x = Math.random() * width
          }
          s.twinkle += 0.02
        }
        const alpha = reduceMotion
          ? s.baseAlpha
          : s.baseAlpha * (0.6 + 0.4 * Math.sin(s.twinkle))
        const color = s.size === 2 ? colors[(s.x | 0) % colors.length] : '#e8e8f0'
        ctx.globalAlpha = Math.max(0, Math.min(1, alpha))
        ctx.fillStyle = color
        ctx.fillRect(Math.round(s.x), Math.round(s.y), s.size, s.size)
      }
      ctx.globalAlpha = 1
      if (!reduceMotion) raf = requestAnimationFrame(draw)
    }

    setup()
    if (reduceMotion) {
      draw(0)
    } else {
      raf = requestAnimationFrame(draw)
    }

    const onResize = () => {
      cancelAnimationFrame(raf)
      setup()
      if (reduceMotion) draw(0)
      else raf = requestAnimationFrame(draw)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 h-full w-full"
    />
  )
}
