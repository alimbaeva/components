import type { ImageType } from './image.props'

type CardType = {
  image: ImageType
  title: string
  description: string
  description_long?: string
  price: string
  companiesCount?: number
  logos?: ImageType[]
  tags?: string[]
}

export type { CardType }
