import { CardMock } from '@/mocks/cards-mocks'
import { Container } from '@/ui/container/container'
import { ServiceCard } from '@/widgets/cards/service-card/service-card'

const CardsView = () => {
  return (
    <Container variant='div'>
      <ServiceCard
        image={CardMock.image}
        title={CardMock.title}
        description={CardMock.description}
        price={CardMock.price}
        companiesCount={CardMock.companiesCount}
        logos={CardMock.logos}
      />
    </Container>
  )
}

export { CardsView }
