'use client'

import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { slidesMock } from '@/mocks/slides'
import Image from 'next/image'
import { Paragraph } from '@/ui/paragraph/paragraph'
import { LeftIcon } from '@/icons/left-icon'
import { RightIcon } from '@/icons/right-icon'
import { fullscreenCarouselMock, titleLinksMock } from '@/mocks/local-text'
import { BlockWithDescription } from '@/widgets/block/block-with-description'
import { Button } from '@/ui/button/button'

const FullscreenCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    axis: 'x',
  })

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  )
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  )

  return (
    <BlockWithDescription
      id='single_slider_embla_carousel'
      titleLinks={titleLinksMock.gitHub}
      title={fullscreenCarouselMock.title}
      descriptionContent={fullscreenCarouselMock.descriptionContent}
      linkToCode={fullscreenCarouselMock.linkToCode}
    >
      <div className='relative aspect-5/2 w-full overflow-hidden rounded-2xl'>
        <div className='h-full w-full' ref={emblaRef}>
          <div className='flex size-full'>
            {slidesMock.map(({ id, link }, ind) => (
              <div
                key={id}
                className='relative flex h-full w-full min-w-0 flex-[0_0_100%] items-center justify-center'
              >
                <Image
                  priority={ind === 0}
                  src={link}
                  alt='slide image'
                  fill
                  className='object-cover'
                />
                <div className='bg-overlay-black-300 absolute top-0 left-0 z-10 size-full p-4'>
                  <Paragraph
                    variant='span'
                    type='medium'
                    color='light'
                    text={`${ind}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button
          rounded='full'
          color='glass'
          size='circle_48'
          className='absolute top-1/2 left-4 z-10 -translate-y-1/2'
          onClick={scrollPrev}
        >
          <LeftIcon className='h-3 w-3 fill-neutral-800 md:h-5 md:w-5' />
        </Button>
        <Button
          rounded='full'
          color='glass'
          className='absolute top-1/2 right-4 z-10 -translate-y-1/2'
          size='circle_48'
          onClick={scrollNext}
        >
          <RightIcon className='h-3 w-3 fill-neutral-800 md:h-5 md:w-5' />
        </Button>
      </div>
    </BlockWithDescription>
  )
}

export { FullscreenCarousel }
