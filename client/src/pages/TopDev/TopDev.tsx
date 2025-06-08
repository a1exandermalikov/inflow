import { useState } from 'react'
import { DevCard } from '../../components/DevCard/DevCard'
import { Header } from '../../components/Header/Header'
import './TopDev.css'
import { CanvasHighlight } from '../../components/CanvasHighlight/CanvasHighlight'

interface TopDevProps {
	loading: boolean
}

interface DevData {
	name: string
	status: string
	role: string
	level: string
	followers: number
	avatarUrl: string
}

const devsData: DevData[] = [
	{
		name: 'alexander_malikov',
		status: 'available',
		role: 'backend developer',
		level: 'junior',
		followers: 121,
		avatarUrl:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcIemFD4Zyz_rHmyh3UlJLJW8UnzC50YUbUruTVf6sv1eS0mQuEQrq98CriOSvD3ZZx-s&usqp=CAU',
	},
	{
		name: 'ktoto',
		status: 'working',
		role: 'frontend developer',
		level: 'middle',
		followers: 8492,
		avatarUrl:
			'https://img.freepik.com/free-photo/modern-minimalist-office-black-white_23-2151777595.jpg?semt=ais_hybrid&w=740',
	},
	{
		name: 'malikovdev',
		status: 'on vacation',
		role: 'frontend developer',
		level: 'senior',
		followers: 232,
		avatarUrl:
			'https://img.freepik.com/free-photo/still-life-device-table_23-2150994382.jpg',
	},
	{
		name: 'anna_code',
		status: 'available',
		role: 'backend developer',
		level: 'middle',
		followers: 145,
		avatarUrl:
			'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80',
	},
	{
		name: 'dev_john',
		status: 'working',
		role: 'fullstack developer',
		level: 'junior',
		followers: 98,
		avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
	},
	{
		name: 'lisa_tech',
		status: 'working',
		role: 'UI/UX designer',
		level: 'senior',
		followers: 510,
		avatarUrl:
			'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80',
	},
	{
		name: 'alex_net',
		status: 'on vacation',
		role: 'devops engineer',
		level: 'middle',
		followers: 177,
		avatarUrl: 'https://randomuser.me/api/portraits/men/44.jpg',
	},
]

export function TopDev({ loading }: TopDevProps) {
	document.title = 'Top Developers'

	const [roleFilter, setRoleFilter] = useState<string>('all')
	const [levelFilter, setLevelFilter] = useState<string>('all')
	const [statusFilter, setStatusFilter] = useState<string>('all')

	const filteredDevs = devsData.filter(dev => {
		const roleMatches = roleFilter === 'all' || dev.role === roleFilter
		const levelMatches = levelFilter === 'all' || dev.level === levelFilter
		const statusMatches = statusFilter === 'all' || dev.status === statusFilter
		return roleMatches && levelMatches && statusMatches
	})

	return (
		<div>
			<Header />
			<div className='top-dev-filters'>
				<select
					onChange={e => setRoleFilter(e.target.value)}
					value={roleFilter}
				>
					<option value='all'>All Roles</option>
					<option value='frontend developer'>Frontend Developer</option>
					<option value='backend developer'>Backend Developer</option>
					<option value='fullstack developer'>Fullstack Developer</option>
					<option value='devops engineer'>DevOps Engineer</option>
					<option value='UI/UX designer'>UI/UX Designer</option>
				</select>

				<select
					onChange={e => setLevelFilter(e.target.value)}
					value={levelFilter}
				>
					<option value='all'>All Levels</option>
					<option value='junior'>Junior</option>
					<option value='middle'>Middle</option>
					<option value='senior'>Senior</option>
				</select>

				<select
					onChange={e => setStatusFilter(e.target.value)}
					value={statusFilter}
				>
					<option value='all'>All Statuses</option>
					<option value='available'>Available</option>
					<option value='working'>Working</option>
					<option value='on vacation'>On Vacation</option>
				</select>
			</div>

			<div className='top-dev'>
				<CanvasHighlight />
				{filteredDevs.map(dev => (
					<DevCard
						key={dev.name}
						loading={loading}
						name={dev.name}
						status={dev.status as 'available' | 'working' | 'on vacation'}
						role={dev.role}
						level={dev.level as 'junior' | 'middle' | 'senior'}
						followers={dev.followers}
						avatarUrl={dev.avatarUrl}
					/>
				))}
			</div>
		</div>
	)
}
