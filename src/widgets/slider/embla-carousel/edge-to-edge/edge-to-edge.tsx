import { EdgeToEdge, titleLinksMock } from '@/mocks/local-text'
import { WORK_STEPS_MOCK } from '@/mocks/slides'
import { Container } from '@/ui/container/container'
import { HorizontalCarousel } from '@/ui/horizontal-carousel/horizontal-carousel'
import { BlockWithDescription } from '@/widgets/block/block-with-description'
import { AdvantageCard } from '@/widgets/cards/advantage-card/advantage-card'

const EdgeToEdgeSlide = () => {
  return (
    <BlockWithDescription
      id='edge-to-edge'
      title={EdgeToEdge.title}
      descriptionContent={EdgeToEdge.descriptionContent}
      titleLinks={titleLinksMock.gitHub}
      linkToCode={EdgeToEdge.linkToCode}
    >
      <Container className='bg-neutral-850 max-w-250 rounded-2xl'>
        <HorizontalCarousel isControlButton={false} isRight={true}>
          <div className='flex gap-4 md:gap-6'>
            {WORK_STEPS_MOCK.map((step) => (
              <div className='min-w-0 shrink-0' key={step.index}>
                <AdvantageCard
                  className='min-h-72.5 w-70 md:min-h-75 md:w-[320px]'
                  description={step.description}
                  index={step.index}
                  size='md'
                  title={step.title}
                />
              </div>
            ))}
          </div>
        </HorizontalCarousel>
      </Container>
    </BlockWithDescription>
  )
}

export { EdgeToEdgeSlide }
