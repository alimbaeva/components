'use client'

import { Container } from '@/ui/container/container'
import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { slidesMock } from '@/mocks/slides'
import Image from 'next/image'
import { Paragraph } from '@/ui/paragraph/paragraph'
import { LeftIcon } from '@/icons/left-icon'
import { RightIcon } from '@/icons/right-icon'

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
    <Container>
      <div className='relative h-75 w-125 overflow-hidden rounded-2xl'>
        <div className='h-full w-full' ref={emblaRef}>
          <div className='flex size-full'>
            {slidesMock.map(({ id, link }, ind) => (
              <div
                key={id}
                className='relative flex h-full w-full min-w-0 flex-[0_0_100%] items-center justify-center'
              >
                <Image src={link} alt='' fill className='object-cover' />
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

        <button
          className='absolute top-1/2 left-4 z-10 flex -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/20 p-3 transition-colors hover:bg-white/40'
          onClick={scrollPrev}
        >
          <LeftIcon className='h-5 w-5 fill-neutral-800' />
        </button>
        <button
          className='absolute top-1/2 right-4 z-10 flex -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/20 p-3 transition-colors hover:bg-white/40'
          onClick={scrollNext}
        >
          <RightIcon className='h-5 w-5 fill-neutral-800' />
        </button>
      </div>
    </Container>
  )
}

export { FullscreenCarousel }
