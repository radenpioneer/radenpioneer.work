import type { FC, PropsWithChildren } from 'react'

const Footer: FC<PropsWithChildren> = ({ children }) => {
  const today = new Date()
  return (
    <footer className='grid grid-cols-2 items-center px-4 py-2'>
      <div className='flex'>
        <span className='text-brand-text/80 text-sm font-bold'>{`\u00a9 ${today.getFullYear()}`}</span>
      </div>
      <div className='flex flex-row-reverse gap-1'>{children}</div>
    </footer>
  )
}

export default Footer
