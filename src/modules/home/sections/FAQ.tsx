import Arrow from "@/core/components/ui/icons/arrow"
import { Paragraph, Subheading } from '@/core/design-system/Text'

export default function FAQ() {
	return (
		<section className="relative py-24 overflow-hidden">
			<div className="absolute inset-0 stars opacity-40"></div>
			<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
			<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="flex flex-col lg:flex-row gap-16 items-center">
					<div className="w-full lg:w-1/2 relative order-2 lg:order-1">
						<div className="relative z-10 animate-scale">
							<img alt="Astronaut in space suit floating" loading="lazy" decoding="async" className="w-full max-w-lg mx-auto object-contain drop-shadow-[0_0_50px_rgba(34,211,238,0.2)]" src="/img/astronaut.png" style={{ maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)" }} />
							<div className="absolute top-1/4 -left-4 p-3 bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 rounded-lg text-xs font-mono text-cyan-400 hidden sm:block">
								<div className="flex items-center gap-2 mb-1">
									<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
									<span>SYS_READY</span>
								</div>
								<div className="h-1 w-24 bg-slate-700 rounded-full overflow-hidden">
									<div className="h-full w-2/3 bg-cyan-400"></div>
								</div>
							</div>
							<div className="absolute bottom-1/3 -right-8 p-3 bg-slate-900/80 backdrop-blur-md border border-blue-500/30 rounded-lg text-xs font-mono text-blue-400 hidden sm:block">
								<span className="material-symbols-outlined text-sm mb-1">wifi_tethering</span>
								<div>Signal: 98%</div>
							</div>
						</div>
						<div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none transform -skew-y-12 scale-110"></div>
					</div>
					<div className="w-full lg:w-1/2 order-1 lg:order-2">
						<div className="mb-10">
							<div className="flex items-center gap-2 mb-4">
								<span className="px-2 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono tracking-wider uppercase">Briefing Room</span>
							</div>
							<Subheading className="text-4xl md:text-5xl text-white mb-6">
								Mission Protocols <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">FAQ</span>
							</Subheading>
							<Paragraph className="text-slate-400 text-lg">
								Clarifying mission objectives and operational parameters for seamless deployment.
							</Paragraph>
						</div>
						<div className="space-y-4">
							<details className="group relative bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 open:bg-slate-800/60 open:border-cyan-500/50 hover:border-white/10">
								<summary className="flex items-center justify-between p-6 cursor-pointer list-none text-white font-medium select-none focus:outline-none">
									<Paragraph className="flex items-center gap-4 text-lg">
										<span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 text-cyan-400 text-sm border border-white/5 group-hover:border-cyan-500/30 transition-colors">01</span>
										How does Boxode handle scaling?
									</Paragraph>
									<Arrow className="text-slate-500 group-open:text-cyan-400 transition-transform duration-300 group-open:rotate-180 size-5" stroke="currentColor" color="currentColor" />
								</summary>
								<div className="px-6 pb-6 pt-0 text-slate-300 leading-relaxed pl-[4.5rem]">
									<Paragraph className="font-ASRegular text-balance">
										Our infrastructure is built on cloud-native technologies that automatically adjust resources based on traffic demands, ensuring zero downtime during mission-critical spikes.
									</Paragraph>
								</div>
							</details>
							<details className="group relative bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 open:bg-slate-800/60 open:border-cyan-500/50 hover:border-white/10">
								<summary className="flex items-center justify-between p-6 cursor-pointer list-none text-white font-medium select-none focus:outline-none">
									<Paragraph className="flex items-center gap-4 text-lg">
										<span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 text-cyan-400 text-sm border border-white/5 group-hover:border-cyan-500/30 transition-colors">02</span>
										What is the expected timeline?
									</Paragraph>
									<Arrow className="text-slate-500 group-open:text-cyan-400 transition-transform duration-300 group-open:rotate-180 size-5" stroke="currentColor" color="currentColor" />
								</summary>
								<div className="px-6 pb-6 pt-0 text-slate-300 leading-relaxed pl-[4.5rem]">
									<p className="font-ASRegular text-balance">
										Timelines vary by mission complexity. A standard MVP launch typically takes 8-12 weeks, while enterprise transformations are charted over 6-month trajectories.
									</p>
								</div>
							</details>
							<details className="group relative bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 open:bg-slate-800/60 open:border-cyan-500/50 hover:border-white/10">
								<summary className="flex items-center justify-between p-6 cursor-pointer list-none text-white font-medium select-none focus:outline-none">
									<Paragraph className="flex items-center gap-4 text-lg">
										<span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 text-cyan-400 text-sm border border-white/5 group-hover:border-cyan-500/30 transition-colors">03</span>
										Do you offer post-launch support?
									</Paragraph>
									<Arrow className="text-slate-500 group-open:text-cyan-400 transition-transform duration-300 group-open:rotate-180 size-5" stroke="currentColor" color="currentColor" />
								</summary>
								<div className="px-6 pb-6 pt-0 text-slate-300 leading-relaxed pl-[4.5rem]">
									<p className="font-ASRegular text-balance">
										Yes. Our "Mission Control" team provides 24/7 monitoring, maintenance, and iterative updates to ensure your system remains operational in orbit.
									</p>
								</div>
							</details>
							<details className="group relative bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 open:bg-slate-800/60 open:border-cyan-500/50 hover:border-white/10">
								<summary className="flex items-center justify-between p-6 cursor-pointer list-none text-white font-medium select-none focus:outline-none">
									<Paragraph className="flex items-center gap-4 text-lg">
										<span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 text-cyan-400 text-sm border border-white/5 group-hover:border-cyan-500/30 transition-colors">04</span>
										Security protocols?
									</Paragraph>
									<Arrow className="text-slate-500 group-open:text-cyan-400 transition-transform duration-300 group-open:rotate-180 size-5" stroke="currentColor" color="currentColor" />
								</summary>
								<div className="px-6 pb-6 pt-0 text-slate-300 leading-relaxed pl-[4.5rem]">
									<p className="font-ASRegular text-balance">
										We implement military-grade encryption, regular penetration testing, and zero-trust architecture to protect your data from unauthorized access.
									</p>
								</div>
							</details>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
