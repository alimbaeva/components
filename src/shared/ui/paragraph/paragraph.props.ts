import type { ComponentProps } from 'react'

type Props = ComponentProps<'p'> &
  ComponentProps<'a'> &
  ComponentProps<'span'> & {
    text: string
    color?: 'dark' | 'light' | 'link' | 'custom'
    type?: 'medium' | 'semibold' | 'normal' | 'minimal' | 'custom'
    className?: string
    variant?: 'p' | 'a' | 'span'
  }

export type { Props }
