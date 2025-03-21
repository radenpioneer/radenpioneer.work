import type { FC, PropsWithChildren, HTMLAttributes } from 'react'
import clsx from 'clsx/lite'

const Section: FC<PropsWithChildren<HTMLAttributes<HTMLElement>>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <section {...props} className={clsx('min-h-screen', className)}>
      {children}
    </section>
  )
}

export default Section
