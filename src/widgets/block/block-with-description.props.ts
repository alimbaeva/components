import type { PropsWithChildren } from 'react'

type Props = PropsWithChildren & {
  title?: string
  descriptionContent?: string
  titleLinks?: string
  linkToCode?: string
  id: string
}

export type { Props }
