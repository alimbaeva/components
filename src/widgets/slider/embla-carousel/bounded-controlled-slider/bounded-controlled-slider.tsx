'use client'

import { slidesMock } from '@/mocks/slides'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'

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
    <div className='mx-auto w-full max-w-2xl p-4'>
      {/* Главный контейнер слайдера */}
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

      {/* Навигация */}
      <div className='mt-4 flex items-center justify-between'>
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className='rounded-full bg-white p-2 shadow disabled:opacity-30'
        >
          Назад
        </button>

        {/* Пагинация (Точки) */}
        <div className='flex gap-2'>
          {slidesMock.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === selectedIndex ? 'w-4 bg-black' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>

        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className='rounded-full bg-white p-2 shadow disabled:opacity-30'
        >
          Вперед
        </button>
      </div>
    </div>
  )
}

export { BoundedControlledSlider }
