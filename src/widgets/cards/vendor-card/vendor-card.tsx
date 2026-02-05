import { HeartIcon } from '@/icons/heart-icon'
import { RightIcon } from '@/icons/right-icon'
import { Button } from '@/ui/button/button'
import { LabelLink } from '@/ui/label-link/label-link'
import { Paragraph } from '@/ui/paragraph/paragraph'
import { Title } from '@/ui/title/title'
import Image from 'next/image'
import Link from 'next/link'
import type { Props } from './vendor-card.props'
import { BlockWithDescription } from '@/widgets/block/block-with-description'
import { vendorCardMock } from '@/mocks/cards-mocks'
import { titleLinksMock } from '@/mocks/local-text'

const VendorCard = (props: Props) => {
  const { image, title, description, price, tags } = props

  return (
    <BlockWithDescription
      id='vendor_card'
      title={vendorCardMock.title}
      descriptionContent={vendorCardMock.descriptionContent}
      titleLinks={titleLinksMock.gitHub}
      linkToCode={vendorCardMock.linkToCode}
    >
      <div className='relative flex max-w-5xl flex-col items-start gap-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm xl:flex-row'>
        <div className='relative flex h-50 w-full shrink-0 items-center justify-center overflow-hidden rounded-xl border border-gray-200 p-4 lg:aspect-square xl:w-60'>
          <Image
            src={image.src}
            alt='Green Garden Logo'
            fill
            className='h-full w-full object-cover'
          />
        </div>

        <div className='flex flex-1 flex-col gap-4'>
          <div className='space-y-2'>
            <Title type='normal' text={title} />
            <span className='mb-2 flex text-right text-2xl font-bold text-gray-900 xl:hidden'>
              {price} ₽
            </span>
            <div className='flex flex-wrap gap-2'>
              {tags &&
                tags.map((tag, index) => (
                  <LabelLink
                    key={index}
                    label={tag}
                    className='relative z-10'
                  />
                ))}
            </div>
          </div>

          <Paragraph
            className='line-clamp-5'
            type='normal_16'
            color='dark'
            text={description}
          />
        </div>

        <div className='flex w-full flex-col items-start gap-3 xl:max-w-48'>
          <span className='mb-2 hidden text-right text-2xl font-bold text-gray-900 xl:flex'>
            {price} ₽
          </span>

          <div className='flex w-full flex-row justify-between gap-3 xl:flex-col'>
            <Button
              padding={4_2}
              color='light_green'
              rounded='xl'
              textColor='white'
              className='relative z-10 w-full'
            >
              Оставить заявку
              <RightIcon className='size-3' />
            </Button>

            <Button
              padding={4_2}
              color='light_900'
              rounded='xl'
              textColor='white'
              className='relative z-10 w-fit sm:w-full'
            >
              <HeartIcon className='h-5 w-5 text-white' />
              <span className='hidden sm:inline'>В избранное</span>
            </Button>
          </div>
        </div>
        <Link
          href={'#'}
          className='absolute top-0 left-0 size-full cursor-pointer'
        />
      </div>
    </BlockWithDescription>
  )
}

export { VendorCard }
