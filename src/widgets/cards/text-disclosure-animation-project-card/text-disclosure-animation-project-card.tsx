import { useState } from 'react'
import Image from 'next/image'
import { MapPinIcon } from '@/icons/map-pin-icon'
import { RefreshCwIcon } from '@/icons/refresh-cw-icon'
import { DownIcon } from '@/icons/down-icon'
import { HeartIcon } from '@/icons/heart-icon'
import type { Props } from './props'

const TextDisclosureAnimationProjectCard = (props: Props) => {
  const {
    labels,
    image,
    logo,
    price,
    title,
    devTitle,
    description,
    description_long,
  } = props

  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className='flex w-full max-w-95 min-w-60 flex-col items-start overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-all duration-300'>
      <div className='relative flex aspect-129/101 h-[225.48px] items-center justify-center self-stretch overflow-hidden'>
        <Image
          src={image.src}
          alt={image.alt ?? ''}
          fill
          className='object-cover'
        />
        <div className='absolute inset-0 bg-linear-to-t from-black/30 to-transparent' />

        <div className='absolute top-3 left-3 flex flex-wrap gap-1.5'>
          {labels.map((tag) => (
            <span
              key={tag}
              className='rounded-full bg-black/40 px-3 py-1 text-[12px] text-white backdrop-blur-md'
            >
              {tag}
            </span>
          ))}
        </div>

        <div className='absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-white/90 p-1 pr-4 backdrop-blur-sm'>
          <div className='flex h-7 w-7 items-center justify-center rounded-full bg-rose-600 text-[10px] font-bold text-white'>
            AG
          </div>
          <span className='text-[13px] font-semibold text-slate-800'>
            {devTitle}
          </span>
        </div>
      </div>

      <div className='flex w-full flex-col gap-3 p-5'>
        <div>
          <h3 className='text-[22px] font-bold text-slate-900'>{title}</h3>
          <p className='text-sm text-slate-400'>срок 2022 - 2024г.</p>
        </div>

        <div className='flex items-center gap-1 text-sm text-slate-500'>
          <MapPinIcon />
          <span>Address. Info</span>
        </div>

        <div className='flex items-center justify-between py-1'>
          <span className='text-[20px] font-bold text-slate-900'>
            от $ {price}
          </span>
          <div className='flex items-center gap-1 text-xs text-slate-400'>
            <RefreshCwIcon />
            <span>99 дн.</span>
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          {[1, 2].map((room) => (
            <div
              key={room}
              className='flex items-center justify-between rounded-xl bg-slate-50 p-3'
            >
              <span className='font-medium text-slate-600'>
                {room}-комн.{' '}
                <span className='ml-2 font-normal text-slate-400'>9999</span>
              </span>
              <span className='font-bold text-slate-800'>от $ 9,999,999</span>
            </div>
          ))}
        </div>

        <div className='relative mt-2'>
          <div
            className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
              isExpanded
                ? 'grid-template-rows-[1fr]'
                : 'grid-template-rows-[0fr]'
            }`}
          >
            <div className='overflow-hidden'>
              <p className='pb-4 text-sm leading-relaxed text-slate-500'>
                {description_long}
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className='absolute right-0 -bottom-1 p-1 text-slate-400 transition-transform hover:text-slate-600'
            style={{
              transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          >
            <DownIcon className='size-4' />
          </button>

          {!isExpanded && (
            <p className='truncate pr-8 text-sm text-slate-500'>
              {description}
            </p>
          )}
        </div>

        <div className='mt-4 flex gap-2'>
          <button className='flex-1 rounded-xl bg-[#333] py-4 text-sm font-bold text-white transition-colors hover:bg-black'>
            Подробнее
          </button>
          <button className='flex w-13.5 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200'>
            <HeartIcon className='size-6' />
          </button>
        </div>
      </div>
    </div>
  )
}

export { TextDisclosureAnimationProjectCard }
