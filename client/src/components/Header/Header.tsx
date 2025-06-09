import './header.css'
import { useState, useEffect, useRef } from 'react'
import { Icon } from '../Icon/Icon'
import { Button } from '../Button/Button'
import { Navigation } from '../Navigation/Navigation'
import { useLocation } from 'react-router-dom'

export function Header() {
	const [menuOpen, setMenuOpen] = useState(false)
	const [isRendered, setIsRendered] = useState(false)
	const touchStartX = useRef<number | null>(null)
	const touchEndX = useRef<number | null>(null)

	const location = useLocation()

	useEffect(() => {
		if (menuOpen) {
			setIsRendered(true)
		} else {
			const timeout = setTimeout(() => setIsRendered(false), 300)
			return () => clearTimeout(timeout)
		}
	}, [menuOpen])

	const toggleMenu = () => setMenuOpen(prev => !prev)
	const closeMenu = () => setMenuOpen(false)
	const openMenu = () => setMenuOpen(true)

	// Swipe support
	useEffect(() => {
		const handleTouchStart = (e: TouchEvent) => {
			touchStartX.current = e.touches[0].clientX
		}

		const handleTouchMove = (e: TouchEvent) => {
			touchEndX.current = e.touches[0].clientX
		}

		const handleTouchEnd = () => {
			if (touchStartX.current === null || touchEndX.current === null) return

			const deltaX = touchEndX.current - touchStartX.current

			if (deltaX > 80) {
				openMenu()
			} else if (deltaX < -80) {
				closeMenu()
			}

			touchStartX.current = null
			touchEndX.current = null
		}

		document.addEventListener('touchstart', handleTouchStart)
		document.addEventListener('touchmove', handleTouchMove)
		document.addEventListener('touchend', handleTouchEnd)

		return () => {
			document.removeEventListener('touchstart', handleTouchStart)
			document.removeEventListener('touchmove', handleTouchMove)
			document.removeEventListener('touchend', handleTouchEnd)
		}
	}, [])

	// Пути, где нужно показывать поиск
	const pathsWithSearch = ['/top', '/courses']

	const showSearch = pathsWithSearch.includes(location.pathname)

	return (
		<header className='header'>
			<div className='top-row'>
				<Button className='header-icon' onClick={toggleMenu}>
					<Icon name='fa-solid fa-bars' />
				</Button>

				<div className='platform-title'>
					<img className='logo' src='./logo.png' alt='logo' />
					<div>
						<h1>Information Flow</h1>
						<span>Dev Together.</span>
					</div>
				</div>

				{/* Добавляем inline-стиль visibility */}
				<div
					className='search-field-wrapper'
					style={{ display: showSearch ? 'initial' : 'none' }}
				>
					<div className='search-field'>
						<input type='text' placeholder='press "/" to search' />
						<button className='search-btn'>
							<Icon name='fa-solid fa-magnifying-glass' />
						</button>
					</div>
				</div>

				<div className='register-option'>
					<Button path='/register' variant='secondary'>
						Register
					</Button>
					<Button path='/login' variant='primary'>
						Login
					</Button>
				</div>
			</div>

			{isRendered && <Navigation isOpen={menuOpen} onClose={closeMenu} />}
		</header>
	)
}
