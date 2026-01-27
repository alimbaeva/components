'use client'

import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import Image from 'next/image'
import { slidesMock } from '@/mocks/slides'
import { BlockWithDescription } from '@/widgets/block/block-with-description'
import { infiniteAutoplaySliderMock, titleLinksMock } from '@/mocks/local-text'

const InfiniteAutoplaySlider = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
    },
    [
      AutoScroll({
        speed: 1,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  )

  return (
    <BlockWithDescription
      id='endless_smooth_slider_embla_carousel'
      titleLinks={titleLinksMock.gitHub}
      title={infiniteAutoplaySliderMock.title}
      descriptionContent={infiniteAutoplaySliderMock.descriptionContent}
      linkToCode={infiniteAutoplaySliderMock.linkToCode}
    >
      <div className='w-full px-4'>
        <div className='overflow-hidden rounded-2xl' ref={emblaRef}>
          <div className='flex'>
            {slidesMock.map(({ id, link }) => (
              <div key={id} className='min-w-[40%] shrink-0 p-2 sm:min-w-[25%]'>
                <div className='relative h-64 w-full overflow-hidden rounded-xl bg-gray-100'>
                  <Image
                    src={link}
                    alt='slide'
                    fill
                    className='object-cover'
                    sizes='(max-width: 768px) 40vw, 25vw'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BlockWithDescription>
  )
}

export { InfiniteAutoplaySlider }
