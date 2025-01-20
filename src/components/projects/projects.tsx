import { type FC, useState } from 'react'
import type { CollectionEntry } from 'astro:content'
import {
  type SortingFn,
  type SortingState,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table'
import { twMerge } from 'tailwind-merge'
import URLIcon from '~icons/lucide/arrow-up-right'
import GithubIcon from '~icons/lucide/github'
import SortDescIcon from '~icons/lucide/arrow-down'
import SortAscIcon from '~icons/lucide/arrow-up'

type Project = CollectionEntry<'projects'>
type ProjectsInput = {
  projects: Array<Project>
}

const sortStatusFn: SortingFn<Project> = (a, b) => {
  const statusOrder = [
    'completed',
    'rejected',
    'archived',
    'on-progress',
    'concept'
  ]

  return (
    statusOrder.indexOf(a.original.data.status) -
    statusOrder.indexOf(b.original.data.status)
  )
}

const columnHelper = createColumnHelper<Project>()
const columns = [
  // year
  columnHelper.accessor('data.date', {
    id: 'year',
    header: 'Year',
    cell: (props) => props.getValue()?.getFullYear(),
    sortUndefined: 'last'
  }),
  // title
  columnHelper.accessor('data.title', {
    id: 'title',
    header: 'Project Title',
    cell: (props) => <span className='font-bold'>{props.getValue()}</span>
  }),
  // status
  columnHelper.accessor('data.status', {
    id: 'status',
    header: 'Status',
    cell: (props) => (
      <span
        className='w-full text-center font-mono text-sm uppercase'
        role='button'
      >
        {props.getValue()}
      </span>
    ),
    sortingFn: sortStatusFn
  }),
  // made for?
  columnHelper.accessor('data.madeFor', {
    header: 'Made for',
    cell: (props) => props.getValue(),
    enableSorting: false
  }),
  // built with?
  columnHelper.accessor('data.tags', {
    id: 'builtWith',
    header: 'Built with',
    cell: (props) => (
      <div className='*:border-brand-primary/75 *:bg-brand-primary/15 *:hover:bg-brand-primary/25 flex flex-wrap gap-1 *:rounded-full *:border *:px-2 *:py-0.5 *:text-sm *:transition-colors'>
        {props.getValue()?.map(({ tag }, _i) => (
          <span
            className='cursor-pointer'
            onClick={() =>
              props.column.setFilterValue([
                { id: props.column.id, value: [tag] }
              ])
            }
            role='button'
            key={_i}
          >
            {tag.name}
          </span>
        ))}
      </div>
    ),
    enableSorting: false
  }),
  // urls
  columnHelper.display({
    id: 'urls',
    header: 'URLs',
    cell: (props) => (
      <div className='*:border-brand-primary/75 *:bg-brand-primary/15 *:hover:bg-brand-primary/25 flex flex-wrap gap-1 *:flex *:items-center *:gap-0.5 *:rounded-full *:border *:px-2 *:py-0.5 *:text-sm *:transition-colors'>
        {props.row.original.data.url && (
          <a href={props.row.original.data.url} target='_blank'>
            <URLIcon />
            <span>URL</span>
          </a>
        )}
        {props.row.original.data.repo && (
          <a href={props.row.original.data.repo} target='_blank'>
            <GithubIcon />
            <span>Repository</span>
          </a>
        )}
      </div>
    ),
    enableSorting: false
  })
]

const Projects: FC<ProjectsInput> = ({ projects }) => {
  const [data, _setData] = useState(() => [...projects])
  const [sorting, setSorting] = useState<SortingState>([
    { id: 'year', desc: true }
  ])
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    enableSortingRemoval: false,
    state: { sorting }
  })

  return (
    <table className='border-brand-primary/50 w-full table-auto border-collapse border'>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                className='border-brand-primary/50 bg-brand-primary/10 border px-2 py-1'
                key={header.id}
              >
                {header.isPlaceholder ? null : (
                  <div
                    className={twMerge(
                      header.column.getCanSort() && 'cursor-pointer',
                      'flex items-center justify-center gap-0.5 text-center select-none'
                    )}
                    onClick={header.column.getToggleSortingHandler()}
                    role='button'
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {{
                      asc: <SortAscIcon className='text-sm' />,
                      desc: <SortDescIcon className='text-sm' />
                    }[header.column.getIsSorted() as string] ?? null}
                  </div>
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
              <td
                className='border-brand-primary/50 border px-2 py-1'
                key={cell.id}
              >
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
