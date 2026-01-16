interface CompanyLogo {
  id: string
  src: string
  alt: string
}

interface Props {
  image: {
    src: string
    alt: string
  }
  title: string
  description: string
  price: string
  companiesCount: number
  logos: CompanyLogo[]
  buttonText: string
  onButtonClick?: () => void
}

export type { CompanyLogo, Props }
