import { type FC, useState } from 'react'
import type { CollectionEntry } from 'astro:content'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table'
import URLIcon from '~icons/lucide/arrow-up-right'
import GithubIcon from '~icons/lucide/github'

type Project = CollectionEntry<'projects'>
type ProjectsInput = {
  projects: Array<Project>
}

const columnHelper = createColumnHelper<Project>()
const columns = [
  // year
  columnHelper.accessor('data.date', {
    header: 'Year',
    cell: (p) => p.getValue()?.getFullYear()
  }),
  // title
  columnHelper.accessor('data.title', {
    header: 'Project Title',
    cell: (p) => <span className='font-bold'>{p.getValue()}</span>
  }),
  // status
  columnHelper.accessor('data.status', {
    header: 'Status',
    cell: (p) => (
      <span
        className='w-full text-center font-mono text-sm uppercase'
        role='button'
      >
        {p.getValue()}
      </span>
    )
  }),
  // made for?
  columnHelper.accessor('data.madeFor', {
    header: 'Made for',
    cell: (p) => p.getValue()
  }),
  // built with?
  columnHelper.accessor('data.tags', {
    header: 'Built with',
    cell: (p) => (
      <div className='*:border-brand-primary/75 *:bg-brand-primary/15 *:hover:bg-brand-primary/25 flex flex-wrap gap-1 *:rounded-full *:border *:px-2 *:py-0.5 *:text-sm *:transition-colors'>
        {p.getValue()?.map(({ tag }) => <span role='button'>{tag.name}</span>)}
      </div>
    )
  }),
  // urls
  columnHelper.display({
    id: 'urls',
    header: 'URLs',
    cell: (p) => (
      <div className='*:border-brand-primary/75 *:bg-brand-primary/15 *:hover:bg-brand-primary/25 flex flex-wrap gap-1 *:flex *:items-center *:gap-0.5 *:rounded-full *:border *:px-2 *:py-0.5 *:text-sm *:transition-colors'>
        {p.row.original.data.url && (
          <a href={p.row.original.data.url} target='_blank'>
            <URLIcon />
            <span>URL</span>
          </a>
        )}
        {p.row.original.data.repo && (
          <a href={p.row.original.data.repo} target='_blank'>
            <GithubIcon />
            <span>Repository</span>
          </a>
        )}
      </div>
    )
  })
]

const Projects: FC<ProjectsInput> = ({ projects }) => {
  const [data, _setData] = useState(() => [...projects])
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <table className='border-brand-primary/50 w-full table-auto border-collapse border'>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                className='border-brand-primary/50 border p-1'
                key={header.id}
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td className='border-brand-primary/50 border p-1' key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Projects
