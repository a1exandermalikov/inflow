import React, { type HTMLAttributes } from 'react'

interface IconProps extends HTMLAttributes<HTMLElement> {
	name: string
}

const Icon: React.FC<IconProps> = ({ name, className = '', ...rest }) => {
	return <i className={`${name} ${className} icon`} {...rest} />
}

export { Icon }
