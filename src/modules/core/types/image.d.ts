declare interface ImageProps {
	src: string
	alt: string
	width?: number
	height?: number
	loading?: 'eager' | 'lazy' | undefined
	decoding?: 'sync' | 'async' | 'auto' | undefined
	overrideSrc?: string
	className?: string
	isLazy?: boolean
}
