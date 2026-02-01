import { CardMock } from '@/mocks/cards-mocks'
import { Container } from '@/ui/container/container'
import { ServiceCard } from '@/widgets/cards/service-card/service-card'
import { ServiceSnippetCard } from '@/widgets/cards/service-snippet/service-snippet'
import { VendorCard } from '@/widgets/cards/vendor-card/vendor-card'

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
      <ServiceSnippetCard
        image={CardMock.image}
        title={CardMock.title}
        description={CardMock.description}
        price={CardMock.price}
        tags={CardMock.tags}
      />
      <VendorCard
        image={CardMock.image}
        title={CardMock.title}
        description={CardMock.description_long}
        price={CardMock.price}
        tags={CardMock.tags}
      />
    </Container>
  )
}

export { CardsView }
