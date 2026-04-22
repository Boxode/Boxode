import { CardSpotlight } from '@/core/components/ui/card-spotlight'
import Image from '@/core/design-system/Image'
import { Paragraph, Subheading } from '@/core/design-system/Text'
import { TechPill } from '@/core/design-system/PillTech'
import Brackets from '@/core/components/ui/icons/brackets'

export default function Solutions() {
	return (
		<section className='px-10 py-20 relative overflow-hidden'>
			<div className='flex items-center justify-between pb-5'>
				<Subheading className='text-3xl mb-4 text-white'>
					Our Solutions
				</Subheading>
				<Paragraph className='text-gray-500 max-w-2xl mx- text-right'>
					Discover our ecosystem of cutting-edge technologies designed to scale
					your business into the future.
				</Paragraph>
			</div>
			<div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-4'>
				<div className='h-40 md:h-auto md:col-span-2 lg:col-span-3 lg:row-span-2 group'>
					<CardSpotlight className='px-12'>
						<div className='text-xl font-bold relative z-20 mt-2 bg-gradient-to-b from-purple-900 to-transparent flex items-center justify-center size-10 rounded-md'>
							<span className='text-white'>&bull;</span>
						</div>
						<div className='mt-4 relative z-20 flex justify-between'>
							<div>
								<Subheading className='text-lg text-white'>
									Web Development
								</Subheading>
								<Paragraph className='text-gray-400 pt-5 w-[700px] text-xl'>
									We build high-performance, scalable web applications with
									modern frameworks. Experience lightning-fast load times and
									seamless interactivity tailored to your users.
								</Paragraph>
							</div>
							<div className='relative overflow-hidden group-hover:scale-110 transition-all group-hover:rotate-[-25deg] ease-in-out duration-200'>
								<Brackets
									className='size-44 rotate-[25deg] text-gray-600 group-hover:text-purple-700 group-hover:ease-in-out'
									stroke='currentColor'
									color='currentColor'
								/>
							</div>
						</div>
						<div className='z-20 relative pt-2 flex gap-3 flex-wrap'>
							<TechPill
								text='React'
								image='/technologies/react.svg'
								className='text-white'
							/>
							<TechPill
								text='Next.js'
								image='/technologies/nextjs.svg'
								className='text-white'
							/>
							<TechPill
								text='Astro'
								image='/technologies/astro.svg'
								className='text-white'
							/>
							<TechPill
								text='Typescript'
								image='/technologies/typescript.svg'
								className='text-white'
							/>
						</div>
					</CardSpotlight>
				</div>

				<div className='h-40 md:h-auto lg:row-span-2'>
					<CardSpotlight
						className='overflow-hidden'
						colors={[
							[16, 185, 129],
							[52, 211, 153]
						]}
					>
						<div className='text-xl font-bold relative z-20 mt-2 bg-gradient-to-b from-purple-900 to-transparent flex items-center justify-center size-10 rounded-md'>
							<span className='text-white'>&bull;</span>
						</div>
						<div className='mt-4 relative z-20 flex justify-between'>
							<div>
								<Subheading className='text-base text-white'>
									Web Development
								</Subheading>
								<Paragraph className='text-gray-400 pt-5 text-sm'>
									We build high-performance, scalable web applications with
									modern frameworks. Experience lightning-fast load times and
									seamless interactivity tailored to your users.
								</Paragraph>
							</div>
							<div className='relative overflow-hidden group-hover:scale-110 transition-all group-hover:rotate-[-25deg] ease-in-out duration-200'>
								<Brackets
									className='size-44 rotate-[25deg] text-gray-600 group-hover:text-purple-700 group-hover:ease-in-out'
									stroke='currentColor'
									color='currentColor'
								/>
							</div>
						</div>
					</CardSpotlight>
				</div>

				<div className='h-40 md:h-auto lg:row-span-2 group'>
					<CardSpotlight
						className='overflow-hidden'
						colors={[
							[251, 146, 60],
							[245, 158, 11]
						]}
					>
						<div className='text-xl font-bold relative z-20 mt-2 bg-gradient-to-b from-purple-900 to-transparent flex items-center justify-center size-10 rounded-md'>
							<span className='text-white'>&bull;</span>
						</div>
						<div className='mt-4 relative z-20 flex justify-between'>
							<div>
								<Subheading className='text-base text-white'>
									Web Development
								</Subheading>
								<Paragraph className='text-gray-400 pt-5 text-sm'>
									We build high-performance, scalable web applications with
									modern frameworks. Experience lightning-fast load times and
									seamless interactivity tailored to your users.
								</Paragraph>
							</div>
							<div className='relative overflow-hidden group-hover:scale-110 transition-all group-hover:rotate-[-25deg] ease-in-out duration-200'>
								<Brackets
									className='size-44 rotate-[25deg] text-gray-600 group-hover:text-purple-700 group-hover:ease-in-out'
									stroke='currentColor'
									color='currentColor'
								/>
							</div>
						</div>
					</CardSpotlight>
				</div>

				<div className='h-40 md:h-auto md:col-span-2 lg:col-span-3 lg:row-span-2'>
					<CardSpotlight
						colors={[
							[244, 114, 182],
							[236, 72, 153]
						]}
					>
						<div className='text-xl font-bold relative z-20 mt-2 bg-gradient-to-b from-purple-900 to-transparent flex items-center justify-center size-10 rounded-md'>
							<span className='text-white'>&bull;</span>
						</div>
						<div className='mt-4 relative z-20 flex justify-between group'>
							<div>
								<Subheading className='text-lg text-white'>
									Web Development
								</Subheading>
								<Paragraph className='text-gray-400 pt-5 w-[700px] text-xl'>
									We build high-performance, scalable web applications with
									modern frameworks. Experience lightning-fast load times and
									seamless interactivity tailored to your users.
								</Paragraph>
							</div>
							<div className='relative overflow-hidden group-hover:scale-110 transition-all group-hover:rotate-[-25deg] ease-in-out duration-200'>
								<Brackets
									className='size-44 rotate-[25deg] text-gray-600 group-hover:text-purple-700 group-hover:ease-in-out'
									stroke='currentColor'
									color='currentColor'
								/>
							</div>
						</div>
					</CardSpotlight>
				</div>
			</div>
		</section>
	)
}
