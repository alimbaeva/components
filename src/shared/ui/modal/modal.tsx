'use client'

import { useRef } from 'react'
import { createPortal } from 'react-dom'

import { useClickOutside } from '@/hooks/use-click-outside'
import { Button } from '@/ui/button/button'

import { useLockBodyScroll } from '@/hooks/use-lock-body-scroll'
import type { Props } from './modal.props'
import clsx from 'clsx'
import { CloseIcon } from '@/icons/close-icon'

const Modal = (props: Props) => {
  const { children, className, isOpen, onClose } = props

  const ref = useRef<HTMLDivElement>(null)
  useClickOutside(ref, onClose, isOpen)
  useLockBodyScroll(isOpen)

  if (!isOpen) return null

  return createPortal(
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-all duration-900 ease-in-out'
      onClick={onClose}
    >
      <div
        aria-modal='true'
        className={clsx(
          'relative max-h-[90vh] overflow-hidden overflow-y-auto rounded-2xl bg-white shadow-xl',
          className,
        )}
        onClick={(e) => e.stopPropagation()}
        ref={ref}
        role='dialog'
      >
        <div className='flex justify-end p-4'>
          <Button
            className='size-10 outline-none'
            onClick={onClose}
            size='custom'
          >
            <CloseIcon className='text-neutral-450' />
          </Button>
        </div>
        {children}
      </div>
    </div>,
    document.body,
  )
}

export { Modal }
