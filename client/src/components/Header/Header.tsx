import './header.css'
import { Icon } from '../Icon/Icon'
import { Button } from '../Button/Button'

export function Header() {
	return (
		<header className='header'>
			<div className='top-row'>
				<Button className='header-icon'>
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
					<Button path='login' variant='primary'>
						Login
					</Button>
				</div>
			</div>
		</header>
	)
}
