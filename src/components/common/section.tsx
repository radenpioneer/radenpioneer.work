import type { FC, HTMLAttributes, PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

const Section: FC<PropsWithChildren<HTMLAttributes<HTMLElement>>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <section
      className={twMerge('mx-auto min-h-svh max-w-screen-lg', className)}
      {...props}
    >
      {children}
    </section>
  )
}

export default Section
