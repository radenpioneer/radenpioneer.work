import type { FC, PropsWithChildren } from 'react'
import type { CollectionEntry } from 'astro:content'

const HeaderLogo: FC<PropsWithChildren<{ site: CollectionEntry<'site'> }>> = ({
  children,
  site
}) => {
  return (
    <a className='flex items-center gap-2' href='/' role='button'>
      {children}
      <span className='hidden text-lg font-bold tracking-wide uppercase sm:block'>
        {site.data.title}
      </span>
    </a>
  )
}

export default HeaderLogo
