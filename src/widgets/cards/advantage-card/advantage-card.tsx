import Image from 'next/image'

import BroadLeaves from '@/public/images/broad_leaves.png'

import type { Props } from './advantage-card.props'
import { cn } from '@/helpers/cn'
import { Title } from '@/ui/title/title'
import { Paragraph } from '@/ui/paragraph/paragraph'

const AdvantageCard = (props: Props) => {
  const { className, description, icon, index, size = 'sm', title } = props

  return (
    <article
      className={cn(
        'relative h-40 overflow-hidden',
        'rounded-2xl bg-neutral-700',
        'flex flex-col gap-4 md:gap-5',
        size == 'sm'
          ? 'px-3 py-7 md:px-5 md:py-9'
          : 'px-6 py-7 md:px-8 md:py-9',
        className,
      )}
    >
      <div
        className={cn(
          'pointer-events-none absolute top-0 -right-[55%] opacity-[0.08] select-none',
          'h-full w-full',
        )}
      >
        <Image
          alt=''
          className='rotate-180 object-contain'
          fill
          priority={false}
          src={BroadLeaves}
        />
      </div>
      {icon && icon}
      {index && (
        <div className='bg-overlay-black-800 flex size-9 items-center justify-center rounded-full text-[16px] font-[700] text-white md:text-[18px]'>
          {index}
        </div>
      )}

      <div className='space-y-2'>
        <Title type='minimal' text={title} />
        <Paragraph type='normal_16' text={description ?? ''} />
      </div>
    </article>
  )
}

export { AdvantageCard }
