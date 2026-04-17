import { cn } from '@/helpers/cn'
import { RightIcon } from '@/icons/right-icon'
import { CardMock, StepInfoCardMock } from '@/mocks/cards-mocks'
import { titleLinksMock } from '@/mocks/local-text'
import { Paragraph } from '@/ui/paragraph/paragraph'
import { Title } from '@/ui/title/title'
import { BlockWithDescription } from '@/widgets/block/block-with-description'
import Image from 'next/image'

const StepInfoCard = () => {
  return (
    <BlockWithDescription
      id='step-info-card'
      title={StepInfoCardMock.title}
      descriptionContent={StepInfoCardMock.descriptionContent}
      titleLinks={titleLinksMock.gitHub}
      linkToCode={StepInfoCardMock.linkToCode}
    >
      <article
        className={cn(
          'group relative flex w-full flex-col overflow-hidden rounded-2xl bg-neutral-700/30 md:w-124',
        )}
      >
        <div
          className={cn(
            'relative overflow-hidden rounded-2xl',
            'aspect-[4/3] h-41.25 w-full',
          )}
        >
          <Image
            alt={CardMock.title}
            className='object-cover'
            fill
            src={CardMock.image.src}
          />
          <div className='absolute top-1.5 left-1.5 flex size-12 items-center justify-center rounded-full bg-teal-900 text-[16px] font-bold text-white md:top-2 md:left-2 md:text-[20px]'>
            1
          </div>
        </div>

        <div className={cn('flex flex-col justify-between gap-5 p-4 md:p-5')}>
          <Title
            className='line-clamp-2 text-teal-900'
            type='normal'
            text={CardMock.title}
          />
          <ul className='flex flex-col gap-1.5'>
            {CardMock.tags.map((el) => (
              <li key={el} className='flex items-start'>
                <div className='flex size-5.5 items-center justify-center'>
                  <RightIcon className='size-3 text-teal-900/60' />
                </div>
                <Paragraph
                  className='line-clamp-5 text-teal-900 md:line-clamp-2'
                  text={el}
                  type='normal'
                />
              </li>
            ))}
          </ul>
        </div>
      </article>
    </BlockWithDescription>
  )
}

export { StepInfoCard }
