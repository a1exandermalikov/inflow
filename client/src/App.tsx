// import { useState } from 'react'
import { GuestPage } from './pages/GuestPage/GuestPage'
import { Routes, Route } from 'react-router-dom'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<GuestPage />} />
			</Routes>
		</>
	)
}

export default App
