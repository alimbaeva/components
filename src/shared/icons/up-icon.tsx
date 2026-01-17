import clsx from 'clsx'
import type { ComponentProps } from 'react'

const UpIcon = ({ className }: ComponentProps<'svg'>) => {
  return (
    <svg
      className={clsx('shrink-0', className)}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 611.986 611.986'
      fill='currentColor'
    >
      <path
        d='M596.145,405.201L347.627,129.608c-11.418-11.494-26.691-16.551-41.633-15.631c-14.967-0.945-30.215,4.112-41.633,15.631
				L15.842,405.201c-21.123,21.251-21.123,55.731,0,76.982c21.123,21.25,55.399,21.25,76.522,0l213.629-236.898l213.629,236.898
				c21.123,21.25,55.398,21.25,76.521,0C617.268,460.933,617.268,426.452,596.145,405.201z'
      />
    </svg>
  )
}

export { UpIcon }
