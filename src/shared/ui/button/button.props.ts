import type { ComponentProps, PropsWithChildren } from 'react'

type Props = ComponentProps<'button'> &
  ComponentProps<'a'> &
  PropsWithChildren & {
    variant?: 'button' | 'a'
    rounded?: 'full' | 'custom'
    color?: 'glass' | 'custom'
    blur?: 'sm' | 'custom'
    size?: 'circle_48' | 'custom'
    gap?: 2 | 'custom'
    className?: string
  }

export type { Props }
