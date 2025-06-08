import React, { useRef, useEffect } from 'react'

export const CanvasHighlight: React.FC = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		const canvas = canvasRef.current!
		const ctx = canvas.getContext('2d')!
		let width = window.innerWidth
		let height = window.innerHeight

		let mouse = { x: width / 2, y: height / 2 }
		let target = { x: width / 2, y: height / 2 }

		canvas.width = width
		canvas.height = height

		const resize = () => {
			width = window.innerWidth
			height = window.innerHeight
			canvas.width = width
			canvas.height = height
		}

		const updateMouse = (e: MouseEvent) => {
			target.x = e.clientX
			target.y = e.clientY
		}

		const lerp = (start: number, end: number, t: number) =>
			start + (end - start) * t

		const render = () => {
			mouse.x = lerp(mouse.x, target.x, 0.1)
			mouse.y = lerp(mouse.y, target.y, 0.1)

			ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
			ctx.fillRect(0, 0, width, height)

			const radius = 500
			const gradient = ctx.createRadialGradient(
				mouse.x,
				mouse.y,
				0,
				mouse.x,
				mouse.y,
				radius
			)
			gradient.addColorStop(0, 'rgba(185, 28, 28, 0.02)')
			gradient.addColorStop(1, 'rgba(185, 28, 28, 0)')

			ctx.globalCompositeOperation = 'lighter'
			ctx.fillStyle = gradient
			ctx.fillRect(mouse.x - radius, mouse.y - radius, radius * 2, radius * 2)
			ctx.globalCompositeOperation = 'source-over'

			requestAnimationFrame(render)
		}

		window.addEventListener('resize', resize)
		window.addEventListener('mousemove', updateMouse)
		render()

		return () => {
			window.removeEventListener('resize', resize)
			window.removeEventListener('mousemove', updateMouse)
		}
	}, [])

	return (
		<canvas
			ref={canvasRef}
			style={{
				position: 'fixed', // 🔧 фиксируем на экране
				top: 0,
				left: 0,
				width: '100vw',
				height: '100vh',
				zIndex: -1,
				pointerEvents: 'none',
			}}
		/>
	)
}
