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
      <div className='flex flex-1 flex-col gap-2'>
        <h3 className='text-xl font-bold sm:text-2xl'>{project.data.title}</h3>
        <p className='text-sm italic sm:text-base'>
          {project.data.description}
        </p>
        {project.data.tags && (
          <div className='mt-auto flex gap-1'>
            {project.data.tags.map(({ tag }, i) => (
              <span
                className='text-brand-primary border-brand-primary bg-brand-primary/5 rounded-full border px-4 py-1 text-xs uppercase'
                key={i}
              >
                {tag.name}
              </span>
            ))}
          </div>
        )}
        {(project.data.url || project.data.repo) && (
          <div className='-mt-1 flex gap-1'>
            {[project.data.url, project.data.repo]
              .filter(Boolean)
              .map((url, i) => (
                <a
                  className='text-brand-text border-brand-text bg-brand-text/5 rounded-full border px-4 py-1 text-xs font-bold uppercase'
                  href={url}
                  key={i}
                >
                  {i === 0 ? 'url' : 'repo'}
                </a>
              ))}
          </div>
        )}
      </div>
    </article>
  )
}

export default Project
