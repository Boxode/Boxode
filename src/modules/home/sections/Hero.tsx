import Pill from '@/core/design-system/Pill'
import { StarsBackground } from '@/core/components/ui/StarsBg'
import { ShootingStars } from '@/core/components/ui/ShootingStars'
import { Meteors } from '@/core/components/ui/Meteors'
import { AvatarCircle } from '@/modules/home/components/AvatarCircle'
import { Heading, Paragraph } from '@/core/design-system/Text'
import Link from '@/core/design-system/Link'

export default function Home() {
	return (
		<section className='bg-black bg-[linear-gradient(to_bottom,#000,#132a3e_34%,#1a3b55_65%,#1c4d70_82%)] h-screen relative overflow-clip'>
			<div className='py-16 md:py-32 max-w-screen-xl mx-auto px-4 relative z-20'>
				<div className='flex items-center justify-center'>
					<Pill
						textPrimary='Boxode have a new image.'
						textAccent='Read More →'
						href='https://boxode.org/'
					/>
				</div>
				<div className='flex jusfity-center flex-col items-center'>
					<Heading className='text-center mt-8 text-white text-pretty'>
						Elevate your business with cutting-edge technology solutions.
					</Heading>
					<Paragraph className='text-gray-300 mt-8 max-w-screen-md text-center text-lg md:text-xl'>
						We believe in combining innovative design, sustainable practices,
						and exceptional technology to bring your vision to life.
					</Paragraph>
				</div>
				<div className='flex items-center justify-center gap-x-10 mt-16'>
					<Link
						href='/contact'
						aria-label='Contact us for more information about a project/product'
						className='group relative overflow-hidden rounded-lg flex items-center bg-white/10 border border-white/15 backdrop-blur-sm px-5 py-3 text-base font-semibold text-white'
					>
						<span className='relative z-10 group-hover:text-black transition-colors font-ASRegular tracking-wide'>
							Contact us
						</span>
						<div className='relative z-10 ml-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white'>
							<svg
								width='14'
								height='14'
								viewBox='0 0 24 24'
								fill='none'
								className='text-[#000] group-hover:translate-x-[5px] transition-transform duration-300'
								stroke='currentColor'
								strokeWidth='3'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<path d='M5 12h14' />
								<path d='m12 5 7 7-7 7' />
							</svg>
						</div>
						<div className='absolute left-0 top-0 h-full w-full'>
							<div className='absolute right-[26px] top-[26px] h-4 w-4 -translate-y-1/2 rounded-full bg-white transition-all duration-300 group-hover:scale-[25]' />
						</div>
					</Link>
					<div className='flex items-center justify-center gap-x-4'>
						<AvatarCircle />
						<Link
							href='/careers'
							className='font-ASRegular max-w-64 text-pretty text-gray-300 text-sm font-medium hover:text-white transition-colors'
						>
							Join us and let&apos;s build the future of software development.
						</Link>
					</div>
				</div>
			</div>

			<div className='absolute h-[375px] w-[750px] sm:w-[1600px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#1c4d70] bg-[radial-gradient(closest-side,#000_70%,#1C4D70)] md:top-[calc(100%-148px)] top-[calc(100%-96px)] z-[1] shadow-xl shadow-white' />
			<div className='absolute bg-gradient-to-t from-black to-transparent' />
			<ShootingStars />
			<Meteors number={8} />
			<StarsBackground />
		</section>
	)
}
