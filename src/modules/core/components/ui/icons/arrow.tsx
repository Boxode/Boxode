interface ArrowProps {
	color?: string
	stroke?: string
	className?: string
}

export default function Arrow({ color, stroke, className }: ArrowProps) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className={className} color={color} stroke={stroke}>
			<path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
		</svg>

	)
}
