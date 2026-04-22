interface CodeProps {
	color?: string
	stroke?: string
	className?: string
}

export default function Code({ color, stroke, className }: CodeProps) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} color={color} fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
			<path d="M16 6.99998L19.0664 9.64296C20.3554 10.7541 21 11.3096 21 12C21 12.6903 20.3555 13.2459 19.0664 14.357L16 17" />
			<path d="M8 6.99998L4.93365 9.64296C3.64455 10.7541 3 11.3096 3 12C3 12.6903 3.64455 13.2459 4.93365 14.357L8 17" />
		</svg>
	)
}
