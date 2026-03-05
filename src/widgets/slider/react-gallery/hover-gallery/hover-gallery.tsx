'use client'

import { useState } from 'react'
import Image from 'next/image'
import { slidesMock } from '@/mocks/slides'
import { BlockWithDescription } from '@/widgets/block/block-with-description'
import { hoverGalleryMock, titleLinksMock } from '@/mocks/local-text'

const HoverGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <BlockWithDescription
      id='group_sliders_embla_carousel'
      titleLinks={titleLinksMock.gitHub}
      title={hoverGalleryMock.title}
      descriptionContent={hoverGalleryMock.descriptionContent}
      linkToCode={hoverGalleryMock.linkToCode}
    >
      <div className='group relative aspect-3/4 w-full max-w-sm overflow-hidden rounded-xl bg-gray-200'>
        {slidesMock.map(({ id, link }, ind) => (
          <Image
            key={id}
            src={link}
            alt={`Slide ${ind}`}
            fill
            className={`object-cover transition-opacity duration-300 ${
              activeIndex === ind ? 'opacity-100' : 'opacity-0'
            }`}
            priority={ind === 0}
          />
        ))}

        <div className='absolute inset-0 z-10 flex'>
          {slidesMock.map((_, ind) => (
            <div
              key={ind}
              className='h-full flex-1'
              onMouseEnter={() => setActiveIndex(ind)}
            />
          ))}
        </div>

        <div className='absolute right-2 bottom-2 left-2 z-20 flex gap-1 sm:hidden'>
          {slidesMock.map((_, ind) => (
            <div
              key={ind}
              className={`h-1 flex-1 rounded-full transition-colors ${
                activeIndex === ind ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </BlockWithDescription>
  )
}

export { HoverGallery }
