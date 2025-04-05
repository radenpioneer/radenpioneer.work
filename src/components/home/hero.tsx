import { type FC, useEffect } from 'react'
import { useAnimate, usePresence, stagger } from 'motion/react'

export interface HeroProps {
  title: string
}

const Hero: FC<HeroProps> = ({ title }) => {
  const [scope, animate] = useAnimate()
  const [isPresent, safeToRemove] = usePresence()

  useEffect(() => {
    if (isPresent) {
      const enterAnimation = async () => {
        await animate(
          'h1 span',
          { opacity: 1, y: [50, 0], scale: [0.8, 1] },
          { duration: 0.3, ease: 'backOut', delay: stagger(0.05) }
        )
      }

      enterAnimation()
    } else {
      const exitAnimation = async () => {
        await animate(
          'h1',
          { opacity: 0, y: 50, scale: 0.8 },
          { duration: 0.1, ease: 'easeOut', delay: stagger(0.05) }
        )

        safeToRemove()
      }

      exitAnimation()
    }
  }, [isPresent])

  const splitTitle = (text: string) =>
    text.split('').map((char, index) => (
      <span key={index} className='inline-block opacity-0'>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))

  return (
    <div className='max-w-screen-lg mx-auto px-4' ref={scope}>
      <h1 className='text-6xl md:text-8xl font-black uppercase text-center text-theme-primary text-shadow-lg'>
        {splitTitle(title)}
      </h1>
    </div>
  )
}

export default Hero
