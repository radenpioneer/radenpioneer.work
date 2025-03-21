import type { FC } from 'react'
import Section from './section'

const Hero: FC<{ title: string }> = ({ title }) => {
  return (
    <Section className='flex flex-col items-center justify-center select-none'>
      <div className='max-w-screen-lg mx-auto px-4'>
        <h1 className='text-6xl md:text-8xl font-black uppercase text-center text-theme-primary'>
          {title}
        </h1>
      </div>
    </Section>
  )
}

export default Hero
