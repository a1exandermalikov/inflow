import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { GuestPage } from './pages/GuestPage/GuestPage'
import { TopDev } from './pages/TopDev/TopDev'
import { useLoading } from './components/LoadingContext/LoadingContext'

function App() {
	const { loading, setLoading } = useLoading()

	useEffect(() => {
		// Имитируем загрузку при монтировании приложения
		const timer = setTimeout(() => setLoading(false), 3000)
		return () => clearTimeout(timer)
	}, [setLoading])

	return (
		<Routes>
			{/* Передаем loading в страницы через пропсы */}
			<Route path='/' element={<GuestPage />} />
			<Route path='/top' element={<TopDev loading={loading} />} />
		</Routes>
	)
}

export default App
