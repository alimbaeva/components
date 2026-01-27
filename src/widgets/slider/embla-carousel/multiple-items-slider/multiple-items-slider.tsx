'use client'

import { useState, useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { slidesMock } from '@/mocks/slides'
import { Button } from '@/ui/button/button'
import { UpIcon } from '@/icons/up-icon'
import { BlockWithDescription } from '@/widgets/block/block-with-description'
import { multipleItemsSliderMock, titleLinksMock } from '@/mocks/local-text'

const MultipleItemsSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 640px)': { slidesToScroll: 2 },
    },
  })

  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const onSelect = useCallback((api: any) => {
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    onSelect(emblaApi)
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <BlockWithDescription
      id='group_sliders_embla_carousel'
      titleLinks={titleLinksMock.gitHub}
      title={multipleItemsSliderMock.title}
      descriptionContent={multipleItemsSliderMock.descriptionContent}
      linkToCode={multipleItemsSliderMock.linkToCode}
    >
      <div className='w-full max-w-6xl px-4'>
        <div className='mb-4 flex justify-end gap-2'>
          <Button
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canScrollPrev}
            className='-rotate-90'
            color='green'
            padding={2}
            rounded='full'
          >
            <UpIcon className='h-5 w-5 fill-white' />
          </Button>

          <Button
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canScrollNext}
            className='rotate-90'
            color='green'
            padding={2}
            rounded='full'
          >
            <UpIcon className='h-5 w-5 fill-white' />
          </Button>
        </div>

        <div className='overflow-hidden rounded-xl' ref={emblaRef}>
          <div className='-ml-4 flex'>
            {slidesMock.map(({ id, link }, ind) => (
              <div key={id} className='min-w-full shrink-0 pl-4 sm:min-w-[50%]'>
                <div className='relative h-64 w-full overflow-hidden rounded-xl bg-gray-100'>
                  <Image
                    src={link}
                    alt={`Slide ${id}`}
                    fill
                    priority={ind < 2}
                    className='object-cover'
                    sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
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

export { MultipleItemsSlider }
