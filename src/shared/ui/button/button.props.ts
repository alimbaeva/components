import type { ComponentProps, PropsWithChildren } from 'react'

type Props = ComponentProps<'button'> &
  ComponentProps<'a'> &
  PropsWithChildren & {
    variant?: 'button' | 'a'
    rounded?: 'full' | 'xl_b' | 'xl_t' | 'xl_r' | 'xl_l' | 'xl' | 'custom'
    color?: 'glass' | 'green' | 'light_green' | 'custom'
    blur?: 'sm' | 'custom'
    size?: 'circle_48' | 'w_full' | 'h_full' | 'custom'
    padding?: 2 | 4_2 | 'custom'
    gap?: 2 | 'custom'
    textColor?: 'white' | 'custom'
    className?: string
    disabled?: boolean
  }

export type { Props }
