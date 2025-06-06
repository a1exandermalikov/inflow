import React, { type ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import './button.css'

type ButtonVariant =
	| 'default'
	| 'primary'
	| 'secondary'
	| 'danger'
	| 'safe'
	| 'disabled'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant
	path?: string // Добавлен новый проп
}

export const Button: React.FC<ButtonProps> = ({
	children,
	variant = 'default',
	className,
	disabled,
	path,
	...rest
}) => {
	const isDisabled = disabled ?? variant === 'disabled'
	const baseClass = clsx('btn-component', `btn-${variant}`, className)

	if (path && !isDisabled) {
		return (
			<Link to={path} className={baseClass} {...(rest as any)}>
				{children}
			</Link>
		)
	}

	return (
		<button className={baseClass} disabled={isDisabled} {...rest}>
			{children}
		</button>
	)
}
