'use client'

import { useLayoutEffect } from 'react'

const useLockBodyScroll = (isLocked: boolean) => {
  useLayoutEffect(() => {
    if (isLocked) {
      const scrollBarWidth =
        globalThis.window.innerWidth - document.body.clientWidth

      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = `${scrollBarWidth}px`
    } else {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }

    return () => {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }, [isLocked])
}

export { useLockBodyScroll }
