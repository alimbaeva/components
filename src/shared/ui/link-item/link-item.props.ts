import type { MouseEvent } from 'react'

type Props = {
  link: string
  label: string
  isActive: boolean
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void
  isLeftElement?: boolean
  parentClassName?: string
  className?: string
  elementStyle?: string
}

export type { Props }
