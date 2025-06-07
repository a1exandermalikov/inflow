import './DevCard.css'
import { Button } from '../Button/Button'

interface DevCardProps {
	name?: string
	status?: 'available' | 'working' | 'on vacation'
	role?: string
	level?: 'junior' | 'middle' | 'senior'
	followers?: number | string
	avatarUrl?: string
}

export function DevCard({
	name = 'John Doe',
	status = 'available',
	role = 'frontend developer',
	level = 'senior',
	followers = '0',
	avatarUrl = './logo.png',
}: DevCardProps) {
	const statusClass = `status--${status.replace(/\s+/g, '-')}` // Преобразуем "on vacation" → "status--on-vacation"

	return (
		<div className='dev-card'>
			<div className='dev-card__content'>
				<div className='dev-card__image'>
					<img src={avatarUrl} alt={`${name} avatar`} />
				</div>
				<div className='dev-card__info'>
					<div className='dev-card__title'>
						<h3>{name}</h3>
						<p>{`${level} ${role}`}</p>
					</div>
					<div className='dev-card__status'>
						<p>{followers} followers</p>
						<span className={statusClass}>{status}</span>
					</div>
				</div>
			</div>
			<div className='dev-card__buttons'>
				<Button>Message</Button>
				<Button variant='safe'>Follow</Button>
			</div>
		</div>
	)
}
