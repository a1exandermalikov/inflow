import { createRoot } from 'react-dom/client'
import './styles/global.css'
import App from './App.tsx'
import { HashRouter } from 'react-router-dom'
import { LoadingProvider } from './components/LoadingContext/LoadingContext.tsx'

createRoot(document.getElementById('root')!).render(
	<HashRouter>
		<LoadingProvider>
			<App />
		</LoadingProvider>
	</HashRouter>
)
