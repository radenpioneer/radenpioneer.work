import type { FC, PropsWithChildren } from 'react'
import HeaderLogo from './logo'

const Header: FC<PropsWithChildren> = ({ children }) => {
  return (
    <header className='border-b-brand-background bg-brand-background/30 fixed inset-x-0 top-0 z-[999] flex h-[64px] items-center justify-center border-b px-4 pt-4 pb-2 backdrop-blur-md'>
      {children}
    </header>
  )
}

export { HeaderLogo }
export default Header