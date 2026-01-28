import clsx from 'clsx'
import type { ComponentProps } from 'react'

const CloseIcon = ({ className }: ComponentProps<'svg'>) => (
  <svg
    className={clsx('size-6 shrink-0', className)}
    stroke='currentColor'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M18 6L6 18'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'
    />
    <path
      d='M6 6L18 18'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'
    />
  </svg>
)

export { CloseIcon }
