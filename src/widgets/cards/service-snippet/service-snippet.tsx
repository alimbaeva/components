import { RightIcon } from '@/icons/right-icon'
import Image from 'next/image'
import type { Props } from './service-snippet.props'
import { Button } from '@/ui/button/button'
import { LabelLink } from '@/ui/label-link/label-link'
import Link from 'next/link'
import { Title } from '@/ui/title/title'
import { Paragraph } from '@/ui/paragraph/paragraph'
import { BlockWithDescription } from '@/widgets/block/block-with-description'
import { serviceSnippetCardMock } from '@/mocks/cards-mocks'
import { titleLinksMock } from '@/mocks/local-text'

const ServiceSnippetCard = (props: Props) => {
  const { image, title, description, price, tags } = props

  return (
    <BlockWithDescription
      id='service_snippet_card'
      title={serviceSnippetCardMock.title}
      descriptionContent={serviceSnippetCardMock.descriptionContent}
      titleLinks={titleLinksMock.gitHub}
      linkToCode={serviceSnippetCardMock.linkToCode}
    >
      <article className='group relative flex w-full flex-col items-start gap-6.25 rounded-2xl border-[0.5px] border-[#D1D5DB] bg-white p-4 shadow-sm sm:w-88'>
        <div className='flex gap-4'>
          <div className='relative h-24 w-24 shrink-0 overflow-hidden rounded-lg'>
            <Image
              src={image.src ?? ''}
              alt={image.alt ?? 'image'}
              fill
              className='object-cover'
            />
          </div>

          <div className='flex flex-col gap-1'>
            <Title text={title} type='s' />
            <Paragraph
              text={description}
              type='custom'
              color='light_6'
              className='line-clamp-3 text-sm leading-tight'
            />
          </div>
        </div>

        <div className='flex flex-wrap gap-2'>
          {tags &&
            tags.map((tag, index) => (
              <LabelLink
                key={index}
                label={tag}
                href={'#'}
                className='relative z-10'
              />
            ))}
        </div>

        <div className='flex w-full items-center justify-between'>
          <span className='text-secondary-900 text-2xl font-bold'>
            от {price} ₽
          </span>

          <Button
            padding={4_2}
            color='light_green'
            rounded='xl'
            textColor='white'
            className='relative z-10'
          >
            <span className='font-medium'>Подробнее</span>
            <RightIcon className='size-3' />
          </Button>
        </div>
        <Link
          href={'#'}
          className='absolute top-0 left-0 size-full cursor-pointer'
        />
      </article>
    </BlockWithDescription>
  )
}

export { ServiceSnippetCard }
