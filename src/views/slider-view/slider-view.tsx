import { Container } from '@/ui/container/container'
import { BoundedControlledSlider } from '@/widgets/slider/embla-carousel/bounded-controlled-slider/bounded-controlled-slider'
import { BoundedSlider } from '@/widgets/slider/embla-carousel/bounded-slider/bounded-slider'
import { FullscreenCarousel } from '@/widgets/slider/embla-carousel/fullscreen-carousel/fullscreen-carousel'
import { InfiniteAutoplaySlider } from '@/widgets/slider/embla-carousel/infinite-autoplay-slider/infinite-autoplay-slider'
import { MultipleItemsSlider } from '@/widgets/slider/embla-carousel/multiple-items-slider/multiple-items-slider'
import { ThumbnailsSlider } from '@/widgets/slider/embla-carousel/thumbnails-slider/thumbnails-slider'

const SliderView = () => {
  return (
    <Container variant='div'>
      <FullscreenCarousel />
      <BoundedSlider />
      <BoundedControlledSlider />
      <ThumbnailsSlider />
      <MultipleItemsSlider />
      <InfiniteAutoplaySlider />
    </Container>
  )
}

export { SliderView }
