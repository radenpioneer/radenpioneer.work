import type { FC, PropsWithChildren } from 'react'

const About: FC<PropsWithChildren<{ title: string }>> = ({
  children,
  title
}) => {
  return (
    <div className='flex flex-col justify-center gap-1 p-4 font-mono text-sm leading-snug sm:gap-2 md:col-span-2 md:text-base'>
      <h3 className='font-bold tracking-widest uppercase md:text-lg'>
        {title}
      </h3>
      {children}
    </div>
  )
}

export default About
