import { BoundedControlledSlider } from '@/widgets/slider/embla-carousel/bounded-controlled-slider/bounded-controlled-slider'
import { BoundedSlider } from '@/widgets/slider/embla-carousel/bounded-slider/bounded-slider'
import { FullscreenCarousel } from '@/widgets/slider/embla-carousel/fullscreen-carousel/fullscreen-carousel'
import { MultipleItemsSlider } from '@/widgets/slider/embla-carousel/multiple-items-slider/multiple-items-slider'
import { ThumbnailsSlider } from '@/widgets/slider/embla-carousel/thumbnails-slider/thumbnails-slider'

const SliderView = () => {
  return (
    <div className='flex w-full flex-col'>
      <FullscreenCarousel />
      <BoundedSlider />
      <BoundedControlledSlider />
      <ThumbnailsSlider />
      <MultipleItemsSlider />
    </div>
  )
}

export { SliderView }
