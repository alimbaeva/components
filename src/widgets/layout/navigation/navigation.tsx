'use client'

import { navigationMock } from '@/shared/mocks/navigation'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navigation = () => {
  const pathname = usePathname()

  return (
    <section className='flex items-end justify-end'>
      <nav className='w-[80%] py-6 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] lg:h-full lg:w-75 lg:shadow-[10px_0_15px_-3px_rgba(0,0,0,0.1)]'>
        <ul>
          {navigationMock.map(({ label, link }, ind) => {
            const isActive = pathname === link

            return (
              <li key={ind} className='group hover:bg-warning-100'>
                <Link
                  href={link}
                  className={clsx(
                    'flex size-full px-8 py-3 font-semibold group-hover:text-neutral-500',
                    isActive && 'text-warning-600',
                  )}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </section>
  )
}

export { Navigation }
