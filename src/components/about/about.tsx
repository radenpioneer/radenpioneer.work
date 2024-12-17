import type { FC } from 'react'

const About: FC<{ text: string }> = ({ text: __html }) => {
  return (
    <div className='p-4 sm:col-span-2' dangerouslySetInnerHTML={{ __html }} />
  )
}

export default About
