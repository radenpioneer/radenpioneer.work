import { type FC, useState } from 'react'
import Hero, { type HeroProps } from './hero'
import Projects from './projects'
import { AnimatePresence } from 'motion/react'

export interface HomeProps extends HeroProps {}
type Section = 'hero' | 'projects'

const Home: FC<HomeProps> = ({ title }) => {
  const [section, setSection] = useState<Section>('hero')

  return (
    <section className='flex flex-col items-center justify-center select-none min-h-screen'>
      <AnimatePresence mode='wait'>
        {section === 'hero' && <Hero title={title} key='hero' />}
        {section === 'projects' && (
          <Projects title={'projects'} key='projects' />
        )}
      </AnimatePresence>

      {/* temporary switcher */}
      <button
        className='absolute top-0 left-0 cursor-pointer'
        onClick={() => setSection(section === 'hero' ? 'projects' : 'hero')}
      >
        toggle
      </button>
    </section>
  )
}

export default Home
