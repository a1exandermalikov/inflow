import './DevCard.css'
import { Button } from '../Button/Button'

interface DevCardProps {
	loading?: boolean
	name?: string
	status?: 'available' | 'working' | 'on vacation'
	role?: string
	level?: 'junior' | 'middle' | 'senior'
	followers?: number | string
	avatarUrl?: string
}

export function DevCard({
	loading = false,
	name = 'John Doe',
	status = 'available',
	role = 'frontend developer',
	level = 'senior',
	followers = '0',
	avatarUrl = './logo.png',
}: DevCardProps) {
	const statusClass = `status--${status.replace(/\s+/g, '-')}`
	const levelClass = `level--${level}`

	const messageVariant = status === 'on vacation' ? 'disabled' : 'default'
	const isDisabled = status === 'on vacation'

	const loadingClass = loading ? 'loading' : ''

	return (
		<div className='dev-card'>
			<div className='dev-card__content'>
				<div className={`dev-card__image ${loadingClass}`}>
					<img src={avatarUrl} alt={`${name} avatar`} />
				</div>
				<div className={`dev-card__info`}>
					<div className={`dev-card__title `}>
						<h3 className={loadingClass}>{name}</h3>
						<p className={loadingClass}>
							<span className={`${levelClass} ${loadingClass}`}>{level}</span>{' '}
							{role}
						</p>
					</div>
					<div className={`dev-card__status ${loadingClass}`}>
						<p>{followers} f.</p>
						<span className={`${statusClass} ${loadingClass}`}>{status}</span>
					</div>
				</div>
			</div>
			<div className={`dev-card__buttons`}>
				<Button
					className={loadingClass}
					variant={messageVariant}
					disabled={isDisabled || loading}
				>
					Message
				</Button>
				<Button className={loadingClass} variant='secondary' disabled={loading}>
					Follow
				</Button>
			</div>
		</div>
	)
}
