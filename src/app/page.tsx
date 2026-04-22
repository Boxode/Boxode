import Hero from '@/modules/home/sections/Hero'
import WhyUs from '@/modules/home/sections/WhyUs'
import Solutions from '@/modules/home/sections/Solutions'
import Prefooter from '@/modules/home/sections/Prefooter'
import Roadmap from '@/modules/home/sections/Roadmap'
import FAQ from '@/modules/home/sections/FAQ'

export default function Home() {
	return (
		<>
			<Hero />
			<WhyUs />
			<Solutions />
			<Roadmap />
			<FAQ />
			<Prefooter />
		</>
	)
}
