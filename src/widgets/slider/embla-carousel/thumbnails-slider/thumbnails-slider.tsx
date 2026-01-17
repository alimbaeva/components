'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { slidesMock } from '@/mocks/slides'
import clsx from 'clsx'
import { UpIcon } from '@/icons/up-icon'
import { DownIcon } from '@/icons/down-icon'
import { Button } from '@/ui/button/button'
import { thumbnailsSliderMock, titleLinks } from '@/mocks/local-text'
import { BlockWithDescription } from '@/widgets/block/block-with-description'

const ThumbnailsSlider = () => {
  const [mainRef, mainApi] = useEmblaCarousel({ loop: false })

  const [thumbRef, thumbApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
    axis: 'y',
  })

  const [selectedIndex, setSelectedIndex] = useState(0)

  const onThumbClick = useCallback(
    (index: number) => {
      if (!mainApi || !thumbApi) return
      mainApi.scrollTo(index)
    },
    [mainApi, thumbApi],
  )

  const onSelect = useCallback(() => {
    if (!mainApi || !thumbApi) return
    const index = mainApi.selectedScrollSnap()
    setSelectedIndex(index)
    thumbApi.scrollTo(index)
  }, [mainApi, thumbApi])

  useEffect(() => {
    if (!mainApi) return
    onSelect()
    mainApi.on('select', onSelect)
    mainApi.on('reInit', onSelect)
  }, [mainApi, onSelect])

  return (
    <BlockWithDescription
      titleLinks={titleLinks.gitHub}
      title={thumbnailsSliderMock.title}
      descriptionContent={thumbnailsSliderMock.descriptionContent}
      linkToCode={thumbnailsSliderMock.linkToCode}
    >
      <div className='flex h-125 w-full max-w-5xl gap-4 bg-white p-4'>
        <div className='flex w-32 flex-col gap-2'>
          <Button
            color='green'
            padding={2}
            rounded='xl_t'
            size='w_full'
            onClick={() => mainApi?.scrollPrev()}
          >
            <UpIcon className='h-5 w-5 fill-white' />
          </Button>

          <div className='flex-1 overflow-hidden' ref={thumbRef}>
            <div className='flex h-full flex-col gap-3'>
              {slidesMock.map(({ id, link }, ind) => (
                <div
                  key={id}
                  onClick={() => onThumbClick(ind)}
                  className={clsx(
                    'relative aspect-square w-full shrink-0 cursor-pointer overflow-hidden rounded-xl border-4 transition-all',
                    ind === selectedIndex
                      ? 'border-positive-800 scale-95'
                      : 'border-transparent opacity-60',
                  )}
                >
                  <Image
                    src={link}
                    fill
                    className='object-cover'
                    alt=''
                    sizes='128px'
                  />
                </div>
              ))}
            </div>
          </div>

          <Button
            color='green'
            padding={2}
            rounded='xl_b'
            size='w_full'
            onClick={() => mainApi?.scrollNext()}
          >
            <DownIcon className='h-5 w-5 fill-white' />
          </Button>
        </div>

        <div
          className='relative flex-1 overflow-hidden rounded-3xl bg-gray-100'
          ref={mainRef}
        >
          <div className='flex h-full'>
            {slidesMock.map(({ id, link }, ind) => (
              <div key={id} className='relative h-full min-w-full shrink-0'>
                <Image
                  src={link}
                  fill
                  className='object-cover'
                  alt=''
                  priority={ind === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </BlockWithDescription>
  )
}

export { ThumbnailsSlider }
