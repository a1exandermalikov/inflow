import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Icon } from '../Icon/Icon'
import './Navigation.css'
import { Button } from '../Button/Button'

interface NavigationProps {
	isOpen?: boolean
	onClose?: () => void
}

export function Navigation({ isOpen = false, onClose }: NavigationProps) {
	const location = useLocation()
	const [isVisible, setIsVisible] = useState(false)

	// Когда компонент монтируется, активируем .open класс с задержкой в кадр
	useEffect(() => {
		if (isOpen) {
			requestAnimationFrame(() => setIsVisible(true))
		} else {
			setIsVisible(false)
		}
	}, [isOpen])

	const navItems = [
		{ name: 'Home', path: '/', icon: 'fa-solid fa-house' },
		{ name: 'Top developers', path: '/top', icon: 'fa-solid fa-code' },
		{
			name: 'Latest projects',
			path: '/latest-projects',
			icon: 'fa-solid fa-diagram-project',
		},
		{ name: 'Courses', path: '/courses', icon: 'fa-solid fa-video' },
	]

	return (
		<nav className={`navigation ${isVisible ? 'open' : 'closed'}`}>
			<div className='navigation-header'>
				<img className='logo' src='./logo.png' alt='logo' />
				<Button className='header-icon' onClick={onClose}>
					<Icon name='fa-solid fa-xmark' />
				</Button>
			</div>
			<ul className='navigation-list'>
				{navItems.map(item => (
					<li key={item.path} className='navigation-item'>
						<Link
							to={item.path}
							className={`navigation-link ${
								location.pathname === item.path ? 'active' : ''
							}`}
						>
							<Icon name={item.icon} />
							<span className='link-text'>{item.name}</span>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
