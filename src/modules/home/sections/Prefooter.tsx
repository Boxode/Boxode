'use client'
import { Paragraph, Subheading } from '@/core/design-system/Text'
import { useInView } from 'react-intersection-observer'
import Rocket from '@/core/components/ui/icons/rocket'

export default function Prefooter() {
	const { ref, inView } = useInView({
		triggerOnce: true,
		rootMargin: '2000px 0px',
		threshold: 0.1
	})

	return (
		<section className="relative py-32 overflow-hidden bg-background-dark">
			<div ref={ref} className="absolute inset-0 z-0">
				{inView ? (
					<video
						className="w-full h-full object-cover opacity-40 mix-blend-overlay"
						src="/spaceship.mp4"
						autoPlay
						muted
						loop
						playsInline
						preload="auto"
					/>
				) : (
					<div className="w-full h-full bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_55%),linear-gradient(to_bottom,rgba(3,7,18,0.9),rgba(3,7,18,1))]" />
				)}
				<div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black via-black/70 to-transparent" />
				<div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/70 to-transparent" />
				<div className="absolute inset-0 bg-blue-900/10 mix-blend-color"></div>
			</div>
			<div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<Subheading className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8 drop-shadow-lg">
					Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">launch?</span>
				</Subheading>
				<Paragraph className="text-lg md:text-2xl text-blue-100/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
					Your mission to digital transformation starts here. Initiate the sequence and let's explore new horizons together.
				</Paragraph>
				<a className="glow-button group inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold text-white bg-primary rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 border border-blue-400/30 backdrop-blur-sm" href="#">
					<span className='font-ASRegular'>INITIATE CONTACT</span>
					<Rocket className='size-5' color='currentColor' stroke='currentColor' />
				</a>
				<div className="mt-16 flex justify-center gap-8 opacity-60">
					<Paragraph className="flex flex-col items-center">
						<span className="text-3xl font-bold text-white">200+</span>
						<span className="text-xs uppercase tracking-widest text-blue-200">Missions</span>
					</Paragraph>
					<div className="w-px h-12 bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
					<Paragraph className="flex flex-col items-center">
						<span className="text-3xl font-bold text-white">15</span>
						<span className="text-xs uppercase tracking-widest text-blue-200">Countries</span>
					</Paragraph>
					<div className="w-px h-12 bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
					<Paragraph className="flex flex-col items-center">
						<span className="text-3xl font-bold text-white">24/7</span>
						<span className="text-xs uppercase tracking-widest text-blue-200">Support</span>
					</Paragraph>
				</div>
			</div>
		</section>
	)
}
