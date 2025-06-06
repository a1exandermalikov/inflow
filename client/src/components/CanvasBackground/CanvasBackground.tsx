import { useEffect, useRef } from 'react'

export function CanvasBackground() {
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const animationRef = useRef<number | null>(null)
	const circlesRef = useRef<any[]>([])
	const circlesCount = 35

	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return
		const ctx = canvas.getContext('2d')
		if (!ctx) return

		let width = window.innerWidth
		let height = window.innerHeight

		class CircleClass {
			x: number = 0
			y: number = 0
			radius: number = 0
			speedX: number = 0
			speedY: number = 0
			baseAlpha: number = 0
			alpha: number = 0
			alphaDirection: number = 0
			colorPos: number = 0
			colorSpeed: number = 0

			index: number
			total: number
			cellWidth: number
			cellHeight: number

			constructor(index: number, total: number, width: number, height: number) {
				this.index = index
				this.total = total
				this.cellWidth = width / Math.ceil(Math.sqrt(total))
				this.cellHeight = height / Math.ceil(Math.sqrt(total))
				this.reset()
			}

			reset() {
				const cols = Math.ceil(Math.sqrt(this.total))
				const row = Math.floor(this.index / cols)
				const col = this.index % cols

				const randX = (Math.random() - 0.5) * this.cellWidth * 0.5
				const randY = (Math.random() - 0.5) * this.cellHeight * 0.5

				this.x = col * this.cellWidth + this.cellWidth / 2 + randX
				this.y = row * this.cellHeight + this.cellHeight / 2 + randY

				this.radius = 15 + Math.random() * 40
				this.speedX = (Math.random() - 0.5) * 0.4
				this.speedY = (Math.random() - 0.5) * 0.4
				this.baseAlpha = 0.0495 + Math.random() * 0.1096
				this.alpha = this.baseAlpha
				this.alphaDirection = Math.random() > 0.5 ? 1 : -1
				this.colorPos = Math.random()
				this.colorSpeed = (Math.random() - 0.5) * 0.002
			}

			update(width: number, height: number, mouse: { x: number; y: number }) {
				this.x += this.speedX
				this.y += this.speedY

				if (this.x < this.radius) {
					this.speedX = Math.abs(this.speedX)
					this.x = this.radius
				}
				if (this.x > width - this.radius) {
					this.speedX = -Math.abs(this.speedX)
					this.x = width - this.radius
				}
				if (this.y < this.radius) {
					this.speedY = Math.abs(this.speedY)
					this.y = this.radius
				}
				if (this.y > height - this.radius) {
					this.speedY = -Math.abs(this.speedY)
					this.y = height - this.radius
				}

				this.alpha += 0.002 * this.alphaDirection
				if (this.alpha > this.baseAlpha + 0.02) this.alphaDirection = -1
				if (this.alpha < this.baseAlpha - 0.02) this.alphaDirection = 1

				this.colorPos += this.colorSpeed
				if (this.colorPos > 1) this.colorPos = 0
				if (this.colorPos < 0) this.colorPos = 1

				const dx = this.x - mouse.x
				const dy = this.y - mouse.y
				const dist = Math.sqrt(dx * dx + dy * dy)
				const influenceRadius = 120

				if (dist < influenceRadius) {
					const force = (influenceRadius - dist) / influenceRadius
					const angle = Math.atan2(dy, dx)
					this.x += Math.cos(angle) * force * 1.5
					this.y += Math.sin(angle) * force * 1.5
				}
			}

			draw(ctx: CanvasRenderingContext2D) {
				ctx.beginPath()
				ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
				const colorStart = '#FF3B3B'
				const colorEnd = '#8B0000'
				const color =
					lerpColor(colorStart, colorEnd, this.colorPos) + this.alpha + ')'
				ctx.fillStyle = color
				ctx.shadowColor = color
				ctx.shadowBlur = this.radius / 2
				ctx.fill()
			}
		}

		function lerpColor(a: string, b: string, t: number): string {
			const ah = parseInt(a.replace('#', ''), 16)
			const ar = (ah >> 16) & 0xff
			const ag = (ah >> 8) & 0xff
			const ab = ah & 0xff

			const bh = parseInt(b.replace('#', ''), 16)
			const br = (bh >> 16) & 0xff
			const bg = (bh >> 8) & 0xff
			const bb = bh & 0xff

			const rr = ar + (br - ar) * t
			const rg = ag + (bg - ag) * t
			const rb = ab + (bb - ab) * t

			return `rgba(${rr.toFixed(0)},${rg.toFixed(0)},${rb.toFixed(0)},`
		}

		function resize() {
			width = window.innerWidth
			height = window.innerHeight
			if (canvas) canvas.width = width
			if (canvas) canvas.height = height

			circlesRef.current = []
			for (let i = 0; i < circlesCount; i++) {
				circlesRef.current.push(new CircleClass(i, circlesCount, width, height))
			}
		}
		resize()
		window.addEventListener('resize', resize)

		const mouse = { x: width / 2, y: height / 2 }
		function handleMouseMove(e: MouseEvent) {
			mouse.x = e.clientX
			mouse.y = e.clientY
		}
		window.addEventListener('mousemove', handleMouseMove)

		function animate() {
			if (ctx) ctx.clearRect(0, 0, width, height)
			for (const c of circlesRef.current) {
				c.update(width, height, mouse)
				c.draw(ctx)
			}
			animationRef.current = requestAnimationFrame(animate)
		}

		animate()

		return () => {
			window.removeEventListener('resize', resize)
			window.removeEventListener('mousemove', handleMouseMove)
			if (animationRef.current) cancelAnimationFrame(animationRef.current)
		}
	}, [])

	return (
		<canvas
			ref={canvasRef}
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				zIndex: -1,
				pointerEvents: 'none',
				userSelect: 'none',
			}}
		/>
	)
}
