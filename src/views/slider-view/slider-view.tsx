import { BoundedControlledSlider } from '@/widgets/slider/embla-carousel/bounded-controlled-slider/bounded-controlled-slider'
import { BoundedSlider } from '@/widgets/slider/embla-carousel/bounded-slider/bounded-slider'
import { FullscreenCarousel } from '@/widgets/slider/embla-carousel/fullscreen-carousel/fullscreen-carousel'

const SliderView = () => {
  return (
    <div className='flex w-full flex-col'>
      <FullscreenCarousel />
      <BoundedSlider />
      <BoundedControlledSlider />
    </div>
  )
}

export { SliderView }
