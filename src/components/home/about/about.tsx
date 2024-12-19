import type { FC } from 'react'

const About: FC<{ text: string }> = ({ text: __html }) => {
  return (
    <div
      className='flex flex-col justify-center gap-1 p-4 font-mono text-sm leading-snug sm:col-span-2 sm:text-base'
      dangerouslySetInnerHTML={{ __html }}
    />
  )
}

export default About
