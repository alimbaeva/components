'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const useActiveHash = () => {
  const [active, setActive] = useState('')
  const pathname = usePathname()

  useEffect(() => {
    const updateHash = () => {
      setActive(global.window.location.hash)
    }

    updateHash()

    global.window.addEventListener('hashchange', updateHash)
    global.window.addEventListener('popstate', updateHash)

    return () => {
      global.window.addEventListener('hashchange', updateHash)
      global.window.addEventListener('popstate', updateHash)
    }
  }, [pathname])

  return active
}

export { useActiveHash }
