import Image from 'next/image'

import { cn } from '@/helpers/cn'
import { Title } from '@/ui/title/title'
import { Paragraph } from '@/ui/paragraph/paragraph'
import { Button } from '@/ui/button/button'
import { BlockWithDescription } from '@/widgets/block/block-with-description'
import { ServiceCardHorizontalMock } from '@/mocks/cards-mocks'
import { titleLinksMock } from '@/mocks/local-text'

const ServiceCardHorizontal = () => {
  return (
    <BlockWithDescription
      id='service_long_card'
      title={ServiceCardHorizontalMock.title}
      descriptionContent={ServiceCardHorizontalMock.descriptionContent}
      titleLinks={titleLinksMock.gitHub}
      linkToCode={ServiceCardHorizontalMock.linkToCode}
    >
      <article
        className={cn(
          'group relative flex flex-row overflow-hidden rounded-2xl bg-neutral-700/30',
          'h-auto w-full md:h-59.5 md:max-w-189',
        )}
      >
        <div className='relative h-60 w-[50%] shrink-0 overflow-hidden rounded-2xl md:h-full'>
          <Image
            alt={ServiceCardHorizontalMock.titleCard}
            className='object-cover'
            fill
            sizes='(max-width: 768px) 100vw, 50vw'
            src={ServiceCardHorizontalMock.imageCard}
          />
        </div>

        <div className='flex flex-1 flex-col justify-between px-4 py-3 md:p-5'>
          <div className='space-y-4'>
            <Title
              className='text-positive-900 line-clamp-2'
              type='normal'
              text={ServiceCardHorizontalMock.titleCard}
            />

            <Paragraph
              className='text-positive-900 line-clamp-5 md:line-clamp-2'
              text={ServiceCardHorizontalMock.descriptionCard}
              type='normal_16'
            />
          </div>

          <div className='mt-auto'>
            <Button color='light_900' padding={42} rounded='full'>
              Подробнее
            </Button>
          </div>
        </div>
      </article>
    </BlockWithDescription>
  )
}

export { ServiceCardHorizontal }
