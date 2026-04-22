interface PillProps {
	text: string
	image: string
	className?: string
}

export const TechPill: React.FC<PillProps> = ({ text, image, className }) => {
	return (
		<span
			className={`inline-flex select-none items-center justify-center space-x-2 whitespace-nowrap rounded-full border border-neutral-200/10 bg-white/15 backdrop-blur-md px-3 py-1.5 font-GilroySemibold text-xs ${className}`}
		>
			<img
				src={image}
				alt={text}
				className='mr-2 inline-block size-4'
				width={16}
				height={16}
				loading='lazy'
			/>
			{text}
		</span>
	)
}
