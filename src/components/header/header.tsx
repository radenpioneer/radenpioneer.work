import type { FC, PropsWithChildren } from 'react'
import HeaderLogo from './logo'

const Header: FC<PropsWithChildren> = ({ children }) => {
  return (
    <header className='fixed inset-x-0 top-0 z-[999] h-[64px] sm:pt-2'>
      <nav className='border-brand-background bg-brand-background/50 mx-auto flex max-w-screen-lg items-center justify-center border-b px-4 py-2 backdrop-blur-md sm:justify-start sm:rounded-full sm:border'>
        {children}
      </nav>
    </header>
  )
}

export { HeaderLogo }
export default Header
