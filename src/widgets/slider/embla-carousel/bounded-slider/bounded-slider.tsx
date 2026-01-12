'use client'

import { boundedSliderMock, titleLinks } from '@/mocks/local-text'
import { slidesMock } from '@/mocks/slides'
import { Paragraph } from '@/ui/paragraph/paragraph'
import { BlockWithDescription } from '@/widgets/block/block-with-description'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

const BoundedSlider = () => {
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    containScroll: 'trimSnaps',
    align: 'start',
    dragFree: true,
  })

  return (
    <BlockWithDescription
      title={boundedSliderMock.title}
      descriptionContent={boundedSliderMock.descriptionContent}
      titleLinks={titleLinks.gitHub}
    >
      <div className='w-full'>
        <div
          className='w-full overflow-hidden rounded-2xl bg-gray-100 xl:max-w-200'
          ref={emblaRef}
        >
          <div className='flex gap-4 px-4 py-4'>
            {slidesMock.map(({ id, link }, ind) => (
              <div
                key={id}
                className='relative aspect-video w-80 min-w-0 shrink-0 overflow-hidden rounded-2xl'
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
    </BlockWithDescription>
  )
}

export { BoundedSlider }
