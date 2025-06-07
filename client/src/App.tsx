// import { useState } from 'react'
import { GuestPage } from './pages/GuestPage/GuestPage'
import { TopDev } from './pages/TopDev/TopDev'
import { Routes, Route } from 'react-router-dom'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<GuestPage />} />
				<Route path='/top' element={<TopDev />} />
			</Routes>
		</>
	)
}

export default App
