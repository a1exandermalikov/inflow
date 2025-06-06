import './header.css'
import { useState } from 'react'
import { Icon } from '../Icon/Icon'
import { Button } from '../Button/Button'
import { Navigation } from '../Navigation/Navigation'

export function Header() {
	const [menuOpen, setMenuOpen] = useState(false)

	const toggleMenu = () => setMenuOpen(prev => !prev)
	const closeMenu = () => setMenuOpen(false)

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

				<div className='search-field-wrapper'>
					<div className='search-field'>
						<input type='text' placeholder='press "/" to search' />
						<button className='search-btn'>
							<Icon name='fa-solid fa-magnifying-glass' />
						</button>
					</div>
				</div>

				<div className='register-option'>
					<Button path='/register' variant='default'>
						Register
					</Button>
					<Button path='/login' variant='primary'>
						Login
					</Button>
				</div>
			</div>

			<div className='mobile-nav'>
				<Navigation isOpen={menuOpen} onClose={closeMenu} />
			</div>
		</header>
	)
}
