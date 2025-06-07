import React, { createContext, useState, useContext } from 'react'
import type { ReactNode } from 'react'

interface LoadingContextType {
	loading: boolean
	setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
	const [loading, setLoading] = useState(true)

	return (
		<LoadingContext.Provider value={{ loading, setLoading }}>
			{children}
		</LoadingContext.Provider>
	)
}

export const useLoading = () => {
	const context = useContext(LoadingContext)
	if (!context) {
		throw new Error('useLoading must be used within LoadingProvider')
	}
	return context
}
