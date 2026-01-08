'use client'

import { slidesMock } from '@/mocks/slides'
import { Container } from '@/ui/container/container'
import { Paragraph } from '@/ui/paragraph/paragraph'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

const BoundedSlider = () => {
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    containScroll: 'trimSnaps',
    align: 'start',
  })

  return (
    <Container>
      <div className='w-full xl:max-w-200'>
        <div
          className='w-full overflow-hidden rounded-2xl bg-gray-100 xl:max-w-200'
          ref={emblaRef}
        >
          <div className='flex gap-4 px-4 py-4'>
            {slidesMock.map(({ id, link }, ind) => (
              <div
                key={id}
                className='relative h-48 w-80 min-w-0 shrink-0 overflow-hidden rounded-2xl'
              >
                <Image
                  alt=''
                  src={link}
                  fill
                  className='object-cover'
                  sizes='320px'
                />
                <div className='absolute inset-0 z-20 bg-black/30 p-4'>
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
      </div>
    </Container>
  )
}

export { BoundedSlider }
