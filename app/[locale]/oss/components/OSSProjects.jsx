import Windui from './Cards/Windui'
import Neoicons from './Cards/Neoicons'

export default function Card() {
  return (
    <section className='grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 md:gap-0 pb-20'>
      <Windui />
      <Neoicons />
    </section>
  )
}
