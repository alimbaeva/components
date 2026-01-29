'use client'

import clsx from 'clsx'
import type { Props } from './navigation.props'
import { List } from './ui/list/list'

const NavigationDesktop = (props: Props) => {
  const { className } = props

  return (
    <nav
      className={clsx(
        'top-14 right-0 z-100 h-screen w-72 border-l border-neutral-200 bg-white p-4 lg:top-0',
        'transition-all duration-300 ease-in-out',
        'translate-x-full',
        'lg:right-auto lg:left-0 lg:translate-x-0',
        'lg:border-r lg:border-l-0',
        className,
      )}
    >
      <List />
    </nav>
  )
}

export { NavigationDesktop }
