'use client'

import { slidesMock } from '@/mocks/slides'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { LeftIcon } from '@/icons/left-icon'
import { RightIcon } from '@/icons/right-icon'
import { BlockWithDescription } from '@/widgets/block/block-with-description'
import { boundedControlledSliderMock, titleLinksMock } from '@/mocks/local-text'
import { Button } from '@/ui/button/button'
import clsx from 'clsx'

const BoundedControlledSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true,
  })

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  )
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  )
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  )

  const onSelect = useCallback((api: any) => {
    setSelectedIndex(api.selectedScrollSnap())
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <BlockWithDescription
      id='bounded_controlled_embla_carousel'
      title={boundedControlledSliderMock.title}
      descriptionContent={boundedControlledSliderMock.descriptionContent}
      titleLinks={titleLinksMock.gitHub}
      linkToCode={boundedControlledSliderMock.linkToCode}
    >
      <div className='w-full max-w-3xl p-4'>
        <div className='overflow-hidden rounded-2xl bg-gray-100' ref={emblaRef}>
          <div className='flex gap-4 p-4'>
            {slidesMock.map(({ id, link }, ind) => (
              <div
                key={id}
                className='relative aspect-video w-80 shrink-0 overflow-hidden rounded-2xl'
              >
                <Image src={link} fill alt='' className='object-cover' />
              </div>
            ))}
          </div>
        </div>

        <div className='mt-4 flex items-center justify-between'>
          <Button
            rounded='full'
            size='circle_48'
            color='green'
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className='shadow disabled:cursor-default disabled:opacity-30'
          >
            <LeftIcon className='h-3 w-3 fill-white md:h-5 md:w-5' />
          </Button>

          <div className='flex gap-2'>
            {slidesMock.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={clsx(
                  'h-2 w-2 rounded-full transition-all',
                  index === selectedIndex
                    ? 'bg-positive-800 w-8'
                    : 'bg-gray-400',
                )}
              />
            ))}
          </div>

          <Button
            rounded='full'
            size='circle_48'
            color='green'
            onClick={scrollNext}
            disabled={!canScrollNext}
            className='shadow disabled:cursor-default disabled:opacity-30'
          >
            <RightIcon className='h-3 w-3 fill-white md:h-5 md:w-5' />
          </Button>
        </div>
      </div>
    </BlockWithDescription>
  )
}

export { BoundedControlledSlider }
