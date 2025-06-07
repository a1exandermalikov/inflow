import { Header } from '../../components/Header/Header'
import './GuestPage.css'
import { CanvasBackground } from '../../components/CanvasBackground/CanvasBackground'
import { Button } from '../../components/Button/Button'

export function GuestPage() {
	document.title = 'Welcome to Information Flow'
	return (
		<div className='guest-page'>
			<Header />
			<div className='hero'>
				<CanvasBackground />
				<h2>
					<span>Information Flow</span> <br />
					Community for <span>Structured Thought</span>
				</h2>
				<p>
					With <span>Information Flow</span>, you join a professional community
					for developers, architects, and researchers interested in the{' '}
					<span>fundamental dynamics</span> of how information moves through
					software systems. We approach software not just as components, but as
					a <span>medium for structured thought</span>, where{' '}
					<span>data and meaning </span>
					flow through layered abstractions and reveal{' '}
					<strong>deeper insights</strong> into design.
				</p>
				<div className='hero-buttons'>
					<Button path='/support' variant='secondary'>
						Contact Support
					</Button>
					<Button path='/register' variant='primary'>
						Join the Community
					</Button>
				</div>
			</div>
		</div>
	)
}
