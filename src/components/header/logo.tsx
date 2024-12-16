import type { FC, PropsWithChildren } from 'react'

const HeaderLogo: FC<PropsWithChildren> = ({ children }) => {
  return <a href='/'>{children}</a>
}

export default HeaderLogo
