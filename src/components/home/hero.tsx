import type { FC } from 'react'
import Section from './section'

const Hero: FC<{ title: string }> = ({ title }) => {
  return (
    <Section className='flex flex-col items-center justify-center'>
      <div className='max-w-screen-lg mx-auto px-4'>
        <h1 className='text-6xl md:text-8xl font-black uppercase text-center'>
          {title}
        </h1>
      </div>
    </Section>
  )
}

export default Hero
