import type { FC, PropsWithChildren } from 'react'
import type { CollectionEntry } from 'astro:content'

const Project: FC<
  PropsWithChildren<{ project: CollectionEntry<'projects'> }>
> = ({ children, project }) => {
  return (
    <article className='flex flex-col gap-4 sm:aspect-[1/1.15]'>
      <div className='border-brand-background bg-brand-background/30 aspect-[16/10] overflow-hidden rounded-xl border shadow'>
        {children}
      </div>
      <div className='border-brand-background bg-brand-background/30 flex flex-1 flex-col gap-2 rounded-xl border p-2 text-center shadow sm:py-4'>
        <h3 className='text-xl font-bold'>{project.data.title}</h3>
        <p className='italic'>{project.data.description}</p>
        {project.data.tags && (
          <div className='flex justify-center gap-1'>
            {project.data.tags.map(({ tag }) => (
              <span className='text-brand-primary border-brand-primary bg-brand-primary/5 rounded-full border px-2 py-1 text-xs uppercase'>
                {tag.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}

export default Project
