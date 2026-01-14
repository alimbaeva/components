import clsx from 'clsx'
import type { ComponentProps } from 'react'

const RightIcon = ({ className }: ComponentProps<'svg'>) => {
  return (
    <svg
      className={clsx('shrink-0', className)}
      xmlns='http://www.w3.org/2000/svg'
      fill='currentColor'
      viewBox='0 0 792.082 792.082'
    >
      <path
        d='M622.955,342.127L268.424,20.521c-27.36-27.36-71.677-27.36-99.037,0c-27.36,27.36-27.36,71.676,0,99.037
				l304.749,276.468L169.387,672.492c-27.36,27.359-27.36,71.676,0,99.036s71.677,27.36,99.037,0l354.531-321.606
				c14.783-14.783,21.302-34.538,20.084-53.897C644.225,376.665,637.738,356.911,622.955,342.127z'
      />
    </svg>
  )
}

export { RightIcon }
