import { DevCard } from '../../components/DevCard/DevCard'
import { Header } from '../../components/Header/Header'
import './TopDev.css'
import { CanvasHighlight } from '../../components/CanvasHighlight/CanvasHighlight'

interface TopDevProps {
	loading: boolean
}

export function TopDev({ loading }: TopDevProps) {
	document.title = 'Top Developers'
	return (
		<div>
			<Header />
			<div className='top-dev'>
				<CanvasHighlight />
				<DevCard
					loading={loading}
					name='alexander_malikov'
					status='available'
					role='backend developer'
					level='junior'
					followers={121}
					avatarUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcIemFD4Zyz_rHmyh3UlJLJW8UnzC50YUbUruTVf6sv1eS0mQuEQrq98CriOSvD3ZZx-s&usqp=CAU'
				/>
				<DevCard
					loading={loading}
					name='ktoto'
					status='working'
					role='frontend developer'
					level='middle'
					followers={8492}
					avatarUrl='https://img.freepik.com/free-photo/modern-minimalist-office-black-white_23-2151777595.jpg?semt=ais_hybrid&w=740'
				/>
				<DevCard
					loading={loading}
					name='malikovdev'
					status='on vacation'
					role='frontend developer'
					level='senior'
					followers={232}
					avatarUrl='https://img.freepik.com/free-photo/still-life-device-table_23-2150994382.jpg'
				/>

				<DevCard
					loading={loading}
					name='anna_code'
					status='available'
					role='backend developer'
					level='middle'
					followers={145}
					avatarUrl='https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80'
				/>

				<DevCard
					loading={loading}
					name='dev_john'
					status='working'
					role='fullstack developer'
					level='junior'
					followers={98}
					avatarUrl='https://randomuser.me/api/portraits/men/32.jpg'
				/>

				<DevCard
					loading={loading}
					name='lisa_tech'
					status='working'
					role='UI/UX designer'
					level='senior'
					followers={510}
					avatarUrl='https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80'
				/>

				<DevCard
					loading={loading}
					name='alex_net'
					status='on vacation'
					role='devops engineer'
					level='middle'
					followers={177}
					avatarUrl='https://randomuser.me/api/portraits/men/44.jpg'
				/>
			</div>
		</div>
	)
}
