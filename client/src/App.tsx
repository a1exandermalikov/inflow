import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { GuestPage } from './pages/GuestPage/GuestPage'
import { TopDev } from './pages/TopDev/TopDev'
import { useLoading } from './components/LoadingContext/LoadingContext'

function App() {
	const { loading, setLoading } = useLoading()
	const location = useLocation()

	useEffect(() => {
		// Включаем загрузку при изменении пути
		setLoading(true)

		// Имитируем загрузку, выключаем через 1.5 секунды (или по окончании запроса)
		const timer = setTimeout(() => setLoading(false), 1500)

		return () => clearTimeout(timer)
	}, [location, setLoading])

	return (
		<Routes>
			{/* Передаем loading в страницы через пропсы */}
			<Route path='/' element={<GuestPage />} />
			<Route path='/top' element={<TopDev loading={loading} />} />
		</Routes>
	)
}

export default App
