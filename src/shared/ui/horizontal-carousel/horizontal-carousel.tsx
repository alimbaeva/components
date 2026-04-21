'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'

import type { Props } from './horizontal-carousel.props'
import { Title } from '../title/title'
import { Paragraph } from '../paragraph/paragraph'
import { Button } from '../button/button'
import { RightIcon } from '@/icons/right-icon'
import { LeftIcon } from '@/icons/left-icon'
import { cn } from '@/helpers/cn'

const HorizontalCarousel = (props: Props) => {
  const {
    button,
    children,
    className,
    isControlButton = true,
    isRight = false,
    subTitle,
    title,
  } = props

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true,
  })

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

  return (
    <div className={cn('flex w-full flex-col gap-6 md:gap-12', className)}>
      <div className='flex items-end justify-between gap-12 pr-4 md:pr-0'>
        <div className='flex flex-col gap-3 md:gap-6'>
          {title && <Title text={title} />}
          {subTitle && <Paragraph text={subTitle} />}
        </div>
        {isControlButton && (
          <div className='hidden items-center justify-between gap-3.5 md:flex'>
            <Button
              rounded='full'
              color='glass'
              size='circle_48'
              // className='absolute top-1/2 left-4 z-10 -translate-y-1/2'
              onClick={scrollPrev}
            >
              <LeftIcon className='h-3 w-3 fill-neutral-800 md:h-5 md:w-5' />
            </Button>
            <Button
              rounded='full'
              color='glass'
              // className='absolute top-1/2 right-4 z-10 -translate-y-1/2'
              size='circle_48'
              onClick={scrollNext}
            >
              <RightIcon className='h-3 w-3 fill-neutral-800 md:h-5 md:w-5' />
            </Button>
          </div>
        )}
        {button && button}
      </div>
      <div
        className='relative'
        style={{ marginRight: isRight ? 'calc(50% - 50vw)' : '' }}
      >
        <div className='overflow-hidden' ref={emblaRef}>
          {children}
        </div>

        {isRight && (
          <div
            className={cn(
              'pointer-events-none absolute top-0 right-0 bottom-0 z-10 hidden sm:block',
              'w-[17%]',
              'bg-[linear-gradient(270deg,#FEFEFE_65%,rgba(254,254,254,0)_100%)]',
            )}
          />
        )}
      </div>
    </div>
  )
}

export { HorizontalCarousel }
