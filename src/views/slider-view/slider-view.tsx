import { BoundedSlider } from '@/widgets/slider/embla-carousel/bounded-slider/bounded-slider'
import { FullscreenCarousel } from '@/widgets/slider/embla-carousel/fullscreen-carousel/fullscreen-carousel'

const SliderView = () => {
  return (
    <div className='flex w-full flex-col'>
      <FullscreenCarousel />
      <BoundedSlider />
    </div>
  )
}

export { SliderView }
