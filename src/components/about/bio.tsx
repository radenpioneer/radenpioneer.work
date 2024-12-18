import type { FC, PropsWithChildren } from 'react'
import type { CollectionEntry } from 'astro:content'

const Bio: FC<PropsWithChildren<{ bio: CollectionEntry<'bio'> }>> = ({
  children,
  bio
}) => {
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      {children}
      <div className='flex w-full flex-col gap-1 *:block *:text-center'>
        <span className='text-2xl font-black sm:text-4xl'>{bio.data.name}</span>
        <span className='text-base font-bold'>{bio.data.title}</span>
        <span className='text-sm italic'>{bio.data.description}</span>
      </div>
    </div>
  )
}

export default Bio
