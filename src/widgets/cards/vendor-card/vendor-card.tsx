import { HeartIcon } from '@/icons/heart-icon'
import { RightIcon } from '@/icons/right-icon'
import { Button } from '@/ui/button/button'
import { LabelLink } from '@/ui/label-link/label-link'
import Image from 'next/image'

const VendorCard = () => {
  return (
    <div className='flex max-w-5xl flex-col items-start gap-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:flex-row'>
      <div className='relative flex aspect-square w-full shrink-0 items-center justify-center overflow-hidden rounded-xl border border-gray-200 p-4 md:w-60'>
        <Image
          src='/images/moun-4.avif'
          alt='Green Garden Logo'
          fill
          className='h-full w-full object-cover'
        />
      </div>

      <div className='flex-1 space-y-4'>
        <div className='space-y-2'>
          <h2 className='text-3xl font-bold text-gray-900'>Ever Green</h2>

          <div className='flex flex-wrap gap-2'>
            {[1, 2, 3].map((i) => (
              <LabelLink
                key={i}
                label={'Зимние сады'}
                className='relative z-10'
              />
            ))}
          </div>
        </div>

        <p className='line-clamp-5 leading-relaxed text-gray-700'>
          Озеленение офисных пространств и зимние сады под ключ. Озеленение
          офисных пространств и зимние сады под ключ. Озеленение офисных
          пространств и зимние сады под ключ. Озеленение офисных пространств и
          зимние сады под ключ. Озеленение офисных пространств и зимние сады под
          ключ.
        </p>
      </div>

      <div className='flex w-full min-w-70 flex-col gap-3 md:w-auto'>
        <div className='mb-2 text-right text-2xl font-bold text-gray-900'>
          10 000 - 40 000 ₽
        </div>

        <Button
          padding={4_2}
          color='light_green'
          rounded='xl'
          textColor='white'
          className='relative z-10'
        >
          Оставить заявку
          <RightIcon className='size-3' />
        </Button>

        <Button
          padding={4_2}
          color='light_green'
          rounded='xl'
          textColor='white'
          className='relative z-10'
        >
          <HeartIcon className='h-5 w-5 text-gray-500' />В избранное
        </Button>
      </div>
    </div>
  )
}

export { VendorCard }
