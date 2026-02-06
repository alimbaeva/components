import Image from 'next/image'
import type { Props } from './project-card.props'

const ProjectCard = (props: Props) => {
  const { labels, image, logo, price, title, devTitle } = props

  return (
    <div className='flex w-60 flex-1 shrink-0 basis-0 flex-col items-start gap-0 rounded-2xl bg-white shadow-sm'>
      <div className='group relative flex aspect-129/101 h-[225.48px] items-center justify-center gap-2.5 self-stretch overflow-hidden rounded-2xl'>
        <Image
          src={image.src}
          alt={image.alt ?? ''}
          fill
          className='object-cover'
        />

        <div className='absolute inset-0 top-0 left-0 bg-linear-to-t from-black/40 via-transparent to-black/40' />
        <div className='absolute top-3 left-3 z-10 flex flex-wrap gap-2'>
          {labels.map((label, i) => (
            <span
              key={i}
              className='rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs text-white backdrop-blur-md'
            >
              {label}
            </span>
          ))}
        </div>
        <div className='absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-white/90 p-1 pr-4 shadow-lg backdrop-blur-sm'>
          <div className='relative h-8 w-8 overflow-hidden rounded-full'>
            <Image
              src={logo.src}
              alt={logo.alt ?? ''}
              fill
              className='object-cover'
            />
          </div>
          <span className='text-sm font-medium text-slate-800'>{title}</span>
        </div>
      </div>

      <div className='flex flex-col gap-1 self-stretch p-4'>
        <h3 className='text-xl leading-tight font-bold text-slate-900'>
          {devTitle}
        </h3>
        <p className='text-lg text-slate-600'>от ${price}</p>
      </div>
    </div>
  )
}

export { ProjectCard }
