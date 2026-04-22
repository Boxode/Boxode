import classNames from 'classnames'

interface TitleProps {
	children: React.ReactNode
	className?: string
}

export function Heading({ children, className }: Readonly<TitleProps>) {
	return (
		<h1
			className={classNames(
				'text-5xl md:text-7xl tracking-tight font-GilroyBold text-balance',
				className
			)}
		>
			{children}
		</h1>
	)
}

export function Subheading({ children, className }: Readonly<TitleProps>) {
	return (
		<h2
			className={classNames(
				'text-3xl md:text-5xl tracking-tight font-GilroyBold text-balance',
				className
			)}
		>
			{children}
		</h2>
	)
}

export function Paragraph({ children, className }: Readonly<TitleProps>) {
	return (
		<p className={classNames('font-ASRegular text-pretty', className)}>
			{children}
		</p>
	)
}
