import type { ComponentProps, PropsWithChildren } from 'react'

type Props = ComponentProps<'section'> &
  ComponentProps<'div'> &
  PropsWithChildren & {
    gap?: 'lg' | 'md' | 'custom'
    position?: 'col' | 'row' | 'custom'
    padding?: 'normal' | 'minimal' | 'custom'
    className?: string
    id?: string
    variant?: 'section' | 'div'
  }

export type { Props }
