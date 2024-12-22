import type { FC, PropsWithChildren } from 'react'
import type { CollectionEntry } from 'astro:content'

const Bio: FC<PropsWithChildren<{ bio: CollectionEntry<'bio'> }>> = ({
  children,
  bio
}) => {
  return (
    <hgroup className='flex flex-col items-center justify-center gap-4'>
      {children}
      <div className='flex w-full flex-col gap-1 *:block *:text-center'>
        <h2 className='text-2xl font-black sm:text-4xl'>{bio.data.name}</h2>
        <p className='text-base font-bold'>{bio.data.title}</p>
        <p className='text-sm italic'>{bio.data.description}</p>
      </div>
    </hgroup>
  )
}

export default Bio
