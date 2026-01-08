'use client'

import { slidesMock } from '@/mocks/slides'
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
    <div className='mx-auto w-full max-w-4xl p-4'>
      <div className='overflow-hidden rounded-2xl bg-gray-100' ref={emblaRef}>
        <div className='flex gap-4 p-4'>
          {slidesMock.map(({ id, link }, ind) => (
            <div
              key={id}
              className='relative h-48 min-w-0 flex-[0_0_40%] overflow-hidden rounded-2xl'
            >
              <Image alt='' src={link} fill className='object-cover' />
              <div className='bg-overlay-black-300 absolute top-0 left-0 z-20 size-full p-4'>
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
  )
}

export { BoundedSlider }
