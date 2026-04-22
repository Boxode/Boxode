import { ShootingStars } from '@/core/components/ui/ShootingStars'
import { StarsBackground } from '@/core/components/ui/StarsBg'
import Code from '@/core/components/ui/icons/code'
import Flag from '@/core/components/ui/icons/flag'
import Radar from '@/core/components/ui/icons/radar'
import Rocket from '@/core/components/ui/icons/rocket'
import { Paragraph, Subheading } from '@/core/design-system/Text'

export default function Roadmap() {
	return (
		<section className='relative py-24 overflow-hidden'>
			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-20'>
					<Paragraph className='text-sm font-bold text-blue-500 tracking-wider uppercase mb-2'>
						Roadmap to Success
					</Paragraph>
					<Subheading className='text-3xl md:text-5xl font-bold text-white mb-6'>
						Mission Control: Our Process
					</Subheading>
					<Paragraph className='text-slate-400 max-w-2xl mx-auto text-lg'>
						Navigating the complexities of software development with a
						strategic, phased approach designed for maximum impact and minimal
						friction.
					</Paragraph>
				</div>
				<div className='relative'>
					<div className='absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-900 to-transparent -translate-y-1/2 hidden md:block'></div>
					<div className='absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent -translate-y-1/2 hidden md:block'></div>
					<div className='grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative'>
						<div className='group relative flex flex-col items-center'>
							<div className='mb-6 relative'>
								<div className='w-20 h-20 rounded-full bg-[#0B1120] border-2 border-blue-500/30 group-hover:border-blue-500 flex items-center justify-center relative z-10 transition-all duration-300 group-hover:scale-110'>
									<Rocket className='size-8 text-blue-400 group-hover:text-blue-300 transition-colors' stroke='currentColor' color='currentColor' />
								</div>
								<div className='absolute inset-0 rounded-full bg-blue-500/20 blur-xl group-hover:bg-blue-500/40 transition-all duration-300'></div>
							</div>
							<div className='text-center'>
								<Paragraph className='text-blue-500 text-sm font-bold tracking-widest mb-1'>
									PHASE 01
								</Paragraph>
								<Paragraph className='text-xl font-bold text-white mb-3'>
									Discovery &amp; Orbit
								</Paragraph>
								<Paragraph className='text-slate-400 text-sm leading-relaxed px-2'>
									We analyze your needs, define the trajectory, and align on
									mission objectives before ignition.
								</Paragraph>
							</div>
						</div>
						<div className='group relative flex flex-col items-center md:pt-16'>
							<div className='absolute -top-12 left-1/2 w-1 h-12 bg-blue-900 -translate-x-1/2 md:hidden'></div>
							<div className='mb-6 relative'>
								<div className='w-20 h-20 rounded-full bg-[#0B1120] border-2 border-indigo-500/30 group-hover:border-indigo-500 flex items-center justify-center relative z-10 transition-all duration-300 group-hover:scale-110 shadow-[0_0_20px_rgba(99,102,241,0.3)]'>
									<Radar className='size-8 text-indigo-400 group-hover:text-indigo-300 transition-colors' stroke='currentColor' color='currentColor' />
								</div>
								<div className='absolute inset-0 rounded-full bg-indigo-500/20 blur-xl group-hover:bg-indigo-500/40 transition-all duration-300'></div>
							</div>
							<div className='text-center'>
								<Paragraph className='text-indigo-500 text-sm font-bold tracking-widest mb-1'>
									PHASE 02
								</Paragraph>
								<Paragraph className='text-xl font-bold text-white mb-3'>
									Strategic Planning
								</Paragraph>
								<Paragraph className='text-slate-400 text-sm leading-relaxed px-2'>
									Charting the course with detailed architecture, UI/UX
									blueprints, and technology stack selection.
								</Paragraph>
							</div>
						</div>
						<div className='group relative flex flex-col items-center'>
							<div className='absolute -top-12 left-1/2 w-1 h-12 bg-blue-900 -translate-x-1/2 md:hidden'></div>
							<div className='mb-6 relative'>
								<div className='w-20 h-20 rounded-full bg-[#0B1120] border-2 border-cyan-500/30 group-hover:border-cyan-500 flex items-center justify-center relative z-10 transition-all duration-300 group-hover:scale-110 shadow-[0_0_20px_rgba(34,211,238,0.3)]'>
									<Code className='size-8 text-cyan-400 group-hover:text-cyan-300 transition-colors' stroke='currentColor' color='currentColor' />
								</div>
								<div className='absolute inset-0 rounded-full bg-cyan-500/20 blur-xl group-hover:bg-cyan-500/40 transition-all duration-300'></div>
							</div>
							<div className='text-center'>
								<Paragraph className='text-cyan-500 text-sm font-bold tracking-widest mb-1'>
									PHASE 03
								</Paragraph>
								<Paragraph className='text-xl font-bold text-white mb-3'>
									Development Launch
								</Paragraph>
								<Paragraph className='text-slate-400 text-sm leading-relaxed px-2'>
									Agile sprints commence. Code is crafted, tested, and refined
									in our secure orbital development environment.
								</Paragraph>
							</div>
						</div>
						<div className='group relative flex flex-col items-center md:pt-16'>
							<div className='absolute -top-12 left-1/2 w-1 h-12 bg-blue-900 -translate-x-1/2 md:hidden'></div>
							<div className='mb-6 relative'>
								<div className='w-20 h-20 rounded-full bg-[#0B1120] border-2 border-teal-500/30 group-hover:border-teal-500 flex items-center justify-center relative z-10 transition-all duration-300 group-hover:scale-110 shadow-[0_0_20px_rgba(45,212,191,0.3)]'>
									<Flag className='size-8 text-teal-400 group-hover:text-teal-300 transition-colors' stroke='currentColor' color='currentColor' />
								</div>
								<div className='absolute inset-0 rounded-full bg-teal-500/20 blur-xl group-hover:bg-teal-500/40 transition-all duration-300'></div>
							</div>
							<div className='text-center'>
								<Paragraph className='text-teal-500 text-sm font-bold tracking-widest mb-1'>
									PHASE 04
								</Paragraph>
								<Paragraph className='text-xl font-bold text-white mb-3'>
									Deployment &amp; Beyond
								</Paragraph>
								<Paragraph className='text-slate-400 text-sm leading-relaxed px-2'>
									Seamless launch sequence followed by ongoing support,
									monitoring, and scaling for future expansion.
								</Paragraph>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ShootingStars className='inset-0 pointer-events-none' />
			<StarsBackground className='inset-0 opacity-70 pointer-events-none' />
		</section>
	)
}
