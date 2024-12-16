import type { FC, PropsWithChildren } from 'react'

const Header: FC<PropsWithChildren> = ({ children }) => {
  return (
    <header className='fixed inset-x-0 top-0 z-[999] flex h-[64px] items-center justify-center px-4 pt-4 pb-2'>
      {children}
    </header>
  )
}

export const HeaderLogo: FC<PropsWithChildren> = ({ children }) => {
  return <a href='/'>{children}</a>
}

export default Header
