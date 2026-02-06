import type { ImageType } from './image.props'

type Card = {
  image: ImageType
  title: string
  price: string
}

type CardProjectType = Card & {
  logo: ImageType
  labels: string[]
  devTitle: string
}

type CardType = Card & {
  description: string
  description_long?: string
  companiesCount?: number
  logos?: ImageType[]
  tags?: string[]
}

export type { CardType, CardProjectType }
