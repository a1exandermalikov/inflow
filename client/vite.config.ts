import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
	base: '/inflow/', // имя репозитория с косой чертой!
	plugins: [react()],
	server: {
		host: true, // или '0.0.0.0'
	},
})
