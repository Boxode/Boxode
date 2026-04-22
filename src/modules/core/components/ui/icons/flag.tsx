interface FlagProps {
	color?: string
	stroke?: string
	className?: string
}

export default function Flag({ color, stroke, className }: FlagProps) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} color={color} fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
			<path d="M5.67181 13.9095C10 15.9322 14 7.84169 21 11.8869L18 2.78502C13.4239 -0.299918 8.56286 6.85641 3 4.62523L8.00007 22" />
			<path d="M19 7.00073C13.5 3.00076 9 12.0007 4.5 9.00064" />
			<path d="M8 4.90476L10.8235 13M13.1765 3L16 10.619" />
		</svg>
	)
}
