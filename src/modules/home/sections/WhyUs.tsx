import { Paragraph, Subheading } from '@/core/design-system/Text'
import Image from '@/core/design-system/Image'
import SPill from '@/core/design-system/sPill'

export default function WhyUs() {
	return (
		<section className='px-10 py-20 relative overflow-hidden'>
			<div className='flex items-center justify-between'>
				<Subheading className='text-white'>Built for you</Subheading>
				<Paragraph className='text-gray-400 text-lg w-[700px] uppercase text-right'>
					Our Philosophy
				</Paragraph>
			</div>
			<div className='flex flex-row'>
				<div className='relative w-[700px] aspect-square overflow-hidden rounded-2xl mt-6 shadow-lg shadow-black/50'>
					<div className='absolute bottom-0 left-0 w-full z-10'>
						<div className='absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent w-full' />
						<div className='relative p-6'>
							<span className='text-sm uppercase tracking-wider text-blue-200 font-semibold'>
								Collaboration
							</span>
							<Subheading className='text-white'>United by Code</Subheading>
							<Paragraph className='text-gray-300 text-base max-w-[600px]'>
								Our team works in perfect synesrgy to deliver robust solutions
								that exceed expectations.
							</Paragraph>
						</div>
					</div>
					<Image
						src='/img/Office.webp'
						alt='Office'
						width={1920}
						height={1080}
						className='w-full h-full object-cover select-none object-[30%_50%]'
						isLazy
						decoding='async'
					/>
				</div>

				<div className='pl-6'>
					<div className='w-full h-64 overflow-hidden rounded-2xl mt-6 shadow-lg shadow-black/50'>
						<Image
							src='/img/Office2.webp'
							alt='Office'
							width={1920}
							height={1080}
							className='w-full h-full object-cover select-none object-[50%_20%]'
							isLazy
							decoding='async'
						/>
					</div>

					<Paragraph className='max-w-screen-lg pt-10 text-2xl text-white'>
						We are your{' '}
						<span className='font-bold text-blue-500'>strategic ally</span> in
						the ever-evolving world of software development. At Boxode, we{' '}
						<span className='font-bold text-blue-500'>
							transform ideas into scalable, innovative solutions
						</span>{' '}
						by leveraging cutting-edge technology and industry expertise. From{' '}
						<span className='font-bold text-blue-500'>
							concept to deployment
						</span>
						, we empower{' '}
						<span className='font-bold text-blue-500'>
							businesses, startups, and companies of all sizes
						</span>{' '}
						to achieve their{' '}
						<span className='font-bold text-blue-500'>digital goals</span> with{' '}
						<span className='font-bold text-blue-500'>
							precision and efficiency
						</span>
						.
					</Paragraph>

					<div className='flex items-start justify-start pt-10'>
						<SPill textPrimary='Discover More' href='/about-us' />
					</div>
				</div>
			</div>
			<div className='absolute -top-16 -right-40 w-[700px] h-[700px] bg-gradient-to-b from-black to-[#1c4d70] pointer-events-none rounded-full blur-3xl rotate-[35deg] -z-10' />
			<div className='absolute -bottom-16 -left-40 w-[700px] h-[700px] bg-gradient-to-b from-orange-800/30 to-black pointer-events-none rounded-full blur-3xl rotate-[135deg] -z-10' />
		</section>
	)
}
