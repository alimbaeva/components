import type { ComponentProps, PropsWithChildren } from 'react'

type Props = ComponentProps<'h1'> &
  ComponentProps<'a'> &
  PropsWithChildren & {
    text: string
    className?: string
    color?: 'dark' | 'light' | 'custom'
    type?: 'medium' | 'semibold' | 'normal' | 'minimal' | 'custom'
    variant?: 'h1' | 'h2' | 'h3' | 'a'
  }

export type { Props }
