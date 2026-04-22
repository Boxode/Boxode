/* eslint-disable @next/next/no-img-element */

import { cn } from '@/lib/utils'

interface Avatar {
	imageUrl: string
	profileUrl: string
}
interface AvatarCirclesProps {
	className?: string
	numPeople?: number
	avatarUrls: Avatar[]
}

const AvatarCircles = ({
	numPeople,
	className,
	avatarUrls
}: AvatarCirclesProps) => {
	return (
		<div className={cn('z-10 flex -space-x-3 rtl:space-x-reverse', className)}>
			{avatarUrls.map((url, index) => (
				<img
					key={index}
					className='size-8 rounded-full border-2 border-white/30 dark:border-gray-800 select-none'
					src={url.imageUrl}
					width={40}
					height={40}
					alt={`Avatar ${index + 1}`}
					loading='lazy'
					decoding='async'
				/>
			))}
			{(numPeople ?? 0) > 0 && (
				<a
					className='flex size-8 items-center justify-center rounded-full border-2 border-white bg-black text-center text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-white dark:text-black'
					href=''
				>
					+{numPeople}
				</a>
			)}
		</div>
	)
}

export default AvatarCircles
