import ShinyText from '@/core/components/ui/ShinyText'
import '@/core/styles/Badge.css'

interface PillProps {
	textPrimary: string
	textAccent: string
	href: string
}

export default function Pill({ textPrimary, textAccent, href }: PillProps) {
	return (
		// <a href={href} className='inline-flex items-center justify-center rounded-full transition hover:scale-105 bg-neutral-100/20 border border-white/5 dark:bg-neutral-800/20 select-none space-x-2 whitespace-nowrap px-4 py-2 text-sm backdrop-blur'>
		// 	<ShinyText className="inline-flex gap-x-1">
		// 		<span className="text-white/70 font-ASRegular font-medium">
		// 			{textPrimary}
		// 		</span>
		// 		<span className="text-white font-GilroySemibold">
		// 			{textAccent}
		// 		</span>
		// 	</ShinyText>
		// </a>
		<a className='badge' href={href}>
			<span className='shiny-star'></span>
			<ShinyText className='flex items-center space-x-2'>
				<span className='text-white/70 font-ASRegular font-medium'>
					{textPrimary}
				</span>
				<span className='text-white font-GilroySemibold'>{textAccent}</span>
			</ShinyText>
		</a>
	)
}
