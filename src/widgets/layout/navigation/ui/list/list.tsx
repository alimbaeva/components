import { useSectionNavigation } from '@/hooks/use-section-navigation'
import { navigationMock } from '@/mocks/navigation'
import { LinkItem } from '@/ui/link-item/link-item'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import type { Props } from './list.props'

const List = (props: Props) => {
  const { onClick } = props

  const pathname = usePathname()
  const { activeHash, handleScroll } = useSectionNavigation(onClick)

  return (
    <ul>
      {navigationMock.map((group, idx) => {
        const isCurrentPage = pathname === group.link
        const hasItems = !!group.items?.length

        return (
          <div key={idx}>
            <LinkItem
              link={group.link}
              label={group.label}
              isActive={isCurrentPage}
              parentClassName='flex flex-col'
              className={`px-4 py-1.5 text-sm transition-all ${
                isCurrentPage
                  ? 'bg-warning-100 text-warning-700'
                  : 'text-neutral-600 hover:bg-neutral-100'
              }`}
            />
            {hasItems && (
              <div
                className={clsx(
                  'overflow-hidden pl-6 transition-all duration-500 ease-in-out',
                  isCurrentPage
                    ? 'mt-2 max-h-125 opacity-100'
                    : 'max-h-0 opacity-0',
                )}
              >
                <ul>
                  {group.items?.map((item, i) => {
                    const isActiveHash = activeHash === item.link

                    return (
                      <LinkItem
                        key={i}
                        link={item.link}
                        label={item.label}
                        isActive={isActiveHash}
                        isLeftElement={true}
                        className={`px-4 py-1.5 text-sm transition-all ${
                          isActiveHash
                            ? 'text-warning-600 translate-x-1 font-bold'
                            : 'text-neutral-500 hover:text-neutral-800'
                        }`}
                        elementStyle='bg-warning-600 absolute top-0 bottom-0 -left-0.5 w-0.5'
                        onClick={(e) => handleScroll(e, item.link)}
                      />
                    )
                  })}
                </ul>
              </div>
            )}
          </div>
        )
      })}
    </ul>
  )
}

export { List }
