import classNames from 'classnames'

function Link({
	href,
	children,
	target,
	className,
	isExternal,
	...props
}: LinkProps) {
	const finalTarget = isExternal ? '_blank' : target
	const rel = isExternal ? 'noopener noreferrer' : undefined

	return (
		<a
			href={href}
			target={finalTarget}
			rel={rel}
			className={classNames(className)}
			{...props}
		>
			{children}
		</a>
	)
}

export default Link
