import Image from 'next/image'

import { InfoIcon } from '@/shared/icons/info-icon'

import type { Props } from './service-card.props'

const ServiceCard = (props: Props) => {
  const {
    image,
    title,
    description,
    price,
    companiesCount,
    logos,
    buttonText,
    onButtonClick,
  } = props

  return (
    <article className='w-full max-w-[340px] overflow-hidden rounded-2xl bg-white shadow-lg'>
      {/* Image */}
      <div className='relative h-[200px] w-full'>
        <Image src={image.src} alt={image.alt} fill className='object-cover' />
      </div>

      {/* Content */}
      <div className='p-4'>
        {/* Title */}
        <h3 className='mb-2 text-xl font-semibold text-neutral-100'>{title}</h3>

        {/* Description */}
        <p className='mb-4 text-sm leading-relaxed text-neutral-500'>
          {description}
        </p>

        {/* Price */}
        <div className='mb-1 flex items-center gap-1'>
          <span className='text-lg font-bold text-neutral-100'>{price}</span>
          <InfoIcon className='text-neutral-500' />
        </div>

        {/* Companies count */}
        <p className='mb-4 text-sm text-neutral-500'>
          {companiesCount} компании
        </p>

        {/* Footer with logos and button */}
        <div className='flex items-center justify-between'>
          {/* Company logos */}
          <div className='flex items-center gap-2'>
            {logos.map((logo) => (
              <div
                key={logo.id}
                className='relative h-8 w-8 overflow-hidden rounded'
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className='object-contain'
                />
              </div>
            ))}
          </div>

          {/* Button */}
          <button
            type='button'
            onClick={onButtonClick}
            className='bg-positive-500 hover:bg-positive-600 rounded-lg px-4 py-2.5 text-sm font-medium text-white transition-colors'
          >
            {buttonText}
          </button>
        </div>
      </div>
    </article>
  )
}

export { ServiceCard }
