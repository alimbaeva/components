'use client'

import type { RefObject } from 'react'
import { useEffect } from 'react'

const useClickOutside = <T extends HTMLElement>(
  ref: RefObject<T | null>,
  onClick: () => void,
  enabled: boolean = true,
) => {
  useEffect(() => {
    if (!enabled) return

    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClick()
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClick()
      }
    }

    document.addEventListener('mousedown', handleClick)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [ref, onClick, enabled])
}

export { useClickOutside }
