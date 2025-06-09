import { useState, useRef, useEffect } from 'react'
import { DevCard } from '../../components/DevCard/DevCard'
import { Header } from '../../components/Header/Header'
import './TopDev.css'
import { CanvasHighlight } from '../../components/CanvasHighlight/CanvasHighlight'

interface TopDevProps {
	loading: boolean
}

interface DevData {
	name: string
	status: 'available' | 'working' | 'on vacation'
	role: string
	level: 'junior' | 'middle' | 'senior'
	followers: number
	avatarUrl: string
}

const roles = [
	'backend developer',
	'frontend developer',
	'fullstack developer',
	'UI/UX designer',
	'devops engineer',
	'mobile developer',
	'QA engineer',
	'data scientist',
]

const levels: DevData['level'][] = ['junior', 'middle', 'senior']
const statuses: DevData['status'][] = ['available', 'working', 'on vacation']

function getRandomInt(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

function generateDevs(count: number): DevData[] {
	return Array.from({ length: count }, (_, i) => {
		const status = statuses[i % statuses.length]
		const role = roles[getRandomInt(0, roles.length - 1)]
		const level = levels[getRandomInt(0, levels.length - 1)]
		const followers = getRandomInt(50, 10000)
		const gender = i % 2 === 0 ? 'men' : 'women'
		const avatarId = getRandomInt(1, 99)
		const avatarUrl = `https://randomuser.me/api/portraits/${gender}/${avatarId}.jpg`

		return {
			name: `dev_user_${i + 1}`,
			status,
			role,
			level,
			followers,
			avatarUrl,
		}
	})
}

export function TopDev({ loading }: TopDevProps) {
	document.title = 'Top Developers'

	const [devs] = useState<DevData[]>(() => generateDevs(100))

	const [roleFilter, setRoleFilter] = useState<string>('all')
	const [levelFilter, setLevelFilter] = useState<string>('all')
	const [statusFilter, setStatusFilter] = useState<string>('all')

	const [visibleCount, setVisibleCount] = useState(20)
	const loaderRef = useRef<HTMLDivElement | null>(null)

	const filteredDevs = devs.filter(dev => {
		const roleMatches = roleFilter === 'all' || dev.role === roleFilter
		const levelMatches = levelFilter === 'all' || dev.level === levelFilter
		const statusMatches = statusFilter === 'all' || dev.status === statusFilter
		return roleMatches && levelMatches && statusMatches
	})

	const visibleDevs = filteredDevs.slice(0, visibleCount)

	useEffect(() => {
		const scrollContainer = loaderRef.current?.parentElement

		if (!scrollContainer) return

		const observer = new IntersectionObserver(
			entries => {
				if (entries[0].isIntersecting) {
					setVisibleCount(prev => Math.min(prev + 20, filteredDevs.length))
				}
			},
			{
				root: scrollContainer,
				rootMargin: '0px',
				threshold: 1.0,
			}
		)

		if (loaderRef.current) observer.observe(loaderRef.current)

		return () => {
			observer.disconnect()
		}
	}, [filteredDevs.length])

	return (
		<div className='page'>
			<Header />
			<div className='top-dev-filters'>
				<select
					onChange={e => setRoleFilter(e.target.value)}
					value={roleFilter}
				>
					<option value='all'>All Roles</option>
					{roles.map(r => (
						<option key={r} value={r}>
							{r.charAt(0).toUpperCase() + r.slice(1)}
						</option>
					))}
				</select>

				<select
					onChange={e => setLevelFilter(e.target.value)}
					value={levelFilter}
				>
					<option value='all'>All Levels</option>
					{levels.map(l => (
						<option key={l} value={l}>
							{l.charAt(0).toUpperCase() + l.slice(1)}
						</option>
					))}
				</select>

				<select
					onChange={e => setStatusFilter(e.target.value)}
					value={statusFilter}
				>
					<option value='all'>All Statuses</option>
					{statuses.map(s => (
						<option key={s} value={s}>
							{s.charAt(0).toUpperCase() + s.slice(1)}
						</option>
					))}
				</select>
			</div>

			<div className='top-dev'>
				<CanvasHighlight />
				{visibleDevs.map(dev => (
					<DevCard
						key={dev.name}
						loading={loading}
						name={dev.name}
						status={dev.status}
						role={dev.role}
						level={dev.level}
						followers={dev.followers}
						avatarUrl={dev.avatarUrl}
					/>
				))}
				<div ref={loaderRef} style={{ height: 30 }} />
			</div>
		</div>
	)
}
