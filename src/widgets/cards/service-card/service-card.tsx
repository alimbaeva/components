import Image from 'next/image'

import { InfoIcon } from '@/shared/icons/info-icon'

import type { Props } from './service-card.props'
import { BlockWithDescription } from '@/widgets/block/block-with-description'
import { serviceCardMock } from '@/mocks/cards-mocks'
import { titleLinksMock } from '@/mocks/local-text'
import { Button } from '@/ui/button/button'

const ServiceCard = (props: Props) => {
  const { image, title, description, price, companiesCount, logos } = props

  return (
    <BlockWithDescription
      id='service_card'
      title={serviceCardMock.title}
      descriptionContent={serviceCardMock.descriptionContent}
      titleLinks={titleLinksMock.gitHub}
      linkToCode={serviceCardMock.linkToCode}
    >
      <article className='w-full max-w-85 overflow-hidden rounded-2xl bg-white shadow-lg'>
        <div className='relative h-50 w-full'>
          <Image
            src={image.src}
            alt={image.alt ?? 'image'}
            fill
            className='object-cover'
          />
        </div>

        <div className='p-4'>
          <h3 className='mb-2 text-xl font-semibold text-neutral-100'>
            {title}
          </h3>

          <p className='mb-4 text-sm leading-relaxed text-neutral-500'>
            {description}
          </p>

          <div className='mb-1 flex items-center gap-1'>
            <span className='text-lg font-bold text-neutral-100'>{price}</span>
            <InfoIcon className='text-neutral-500' />
          </div>

          <p className='mb-4 text-sm text-neutral-500'>
            {companiesCount} компании
          </p>

          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              {logos &&
                logos.map((logo) => (
                  <div
                    key={logo.id}
                    className='relative h-8 w-8 overflow-hidden rounded'
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt ?? 'image'}
                      fill
                      className='object-contain'
                    />
                  </div>
                ))}
            </div>

            <Button
              padding={4_2}
              color='light_green'
              rounded='xl'
              textColor='white'
            >
              Все компании
            </Button>
          </div>
        </div>
      </article>
    </BlockWithDescription>
  )
}

export { ServiceCard }
