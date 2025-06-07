import { DevCard } from '../../components/DevCard/DevCard'
import { Header } from '../../components/Header/Header'
import './TopDev.css'

export function TopDev() {
	return (
		<div>
			<Header />
			<div className='top-dev'>
				<DevCard
					name='alexander_malikov'
					status='working'
					role='backend developer'
					level='junior'
					followers={121}
					avatarUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcIemFD4Zyz_rHmyh3UlJLJW8UnzC50YUbUruTVf6sv1eS0mQuEQrq98CriOSvD3ZZx-s&usqp=CAU'
				/>
				<DevCard
					name='ktoto'
					status='available'
					role='frontend developer'
					level='middle'
					followers={8492}
					avatarUrl='https://img.freepik.com/free-photo/modern-minimalist-office-black-white_23-2151777595.jpg?semt=ais_hybrid&w=740'
				/>
				<DevCard
					name='malikovdev'
					status='on vacation'
					role='frontend developer'
					level='senior'
					followers={232}
					avatarUrl='https://img.freepik.com/free-photo/still-life-device-table_23-2150994382.jpg'
				/>

				<DevCard
					name='anna_code'
					status='working'
					role='backend developer'
					level='middle'
					followers={145}
					avatarUrl='https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80'
				/>

				<DevCard
					name='dev_john'
					status='working'
					role='fullstack developer'
					level='junior'
					followers={98}
					avatarUrl='https://randomuser.me/api/portraits/men/32.jpg'
				/>

				<DevCard
					name='lisa_tech'
					status='on vacation'
					role='UI/UX designer'
					level='senior'
					followers={510}
					avatarUrl='https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80'
				/>

				<DevCard
					name='alex_net'
					status='working'
					role='devops engineer'
					level='middle'
					followers={177}
					avatarUrl='https://randomuser.me/api/portraits/men/44.jpg'
				/>
			</div>
		</div>
	)
}
