import { CardMock, ProjectCardMock } from '@/mocks/cards-mocks'
import { Container } from '@/ui/container/container'
import { ProjectCard } from '@/widgets/cards/project-card/project-card'
import { ServiceCard } from '@/widgets/cards/service-card/service-card'
import { ServiceSnippetCard } from '@/widgets/cards/service-snippet/service-snippet'
import { VendorCard } from '@/widgets/cards/vendor-card/vendor-card'

const CardsView = () => {
  return (
    <Container padding='custom' variant='div'>
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
      <ProjectCard
        image={ProjectCardMock.image}
        title={ProjectCardMock.title}
        price={ProjectCardMock.price}
        logo={ProjectCardMock.logo}
        labels={ProjectCardMock.labels}
        devTitle={ProjectCardMock.devTitle}
      />
    </Container>
  )
}

export { CardsView }
