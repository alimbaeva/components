'use client'

'use client'

import { useCallback } from 'react'
import { usePathname } from 'next/navigation'
import { useActiveHash } from './use-active-hash'

export const useSectionNavigation = (onAction?: () => void) => {
  const pathname = usePathname()
  const activeHash = useActiveHash()

  const handleScroll = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
      const [linkPathname, linkHash] = link.split('#')

      const isAnchorOnCurrentPage =
        linkHash && (linkPathname === '' || linkPathname === pathname)

      if (isAnchorOnCurrentPage) {
        e.preventDefault()
        const targetId = `#${linkHash}`
        const element = document.querySelector(targetId)

        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
          window.history.pushState(null, '', targetId)

          window.dispatchEvent(new HashChangeEvent('hashchange'))
        }
      }

      if (onAction) onAction()
    },
    [pathname, onAction],
  )

  return { activeHash, handleScroll }
}
