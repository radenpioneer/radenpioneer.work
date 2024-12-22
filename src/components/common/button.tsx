import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  FC,
  PropsWithChildren
} from 'react'
import { twMerge } from 'tailwind-merge'

export const Button: FC<
  PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>
> = ({ children, className, ...props }) => {
  return (
    <button
      className={twMerge(
        'text-brand-primary bg-brand-primary/10 hover:bg-brand-primary/10 border-brand-primary rounded-full border px-2 py-1 font-bold tracking-wide uppercase',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export const LinkButton: FC<
  PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>
> = ({ children, className, ...props }) => {
  return (
    <a
      className={twMerge(
        'text-brand-primary bg-brand-primary/10 hover:bg-brand-primary/30 border-brand-primary rounded-full border px-4 py-1 font-bold tracking-wide uppercase',
        className
      )}
      {...props}
    >
      {children}
    </a>
  )
}
