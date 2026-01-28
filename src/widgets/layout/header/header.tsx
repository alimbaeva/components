'use client'

import { BurgerMenuBlock } from '@/ui/burger-menu-block/burger-menu-block'
import { Button } from '@/ui/button/button'
import { Container } from '@/ui/container/container'
import { useState } from 'react'
import { Navigation } from '../navigation/navigation'
import { useLockBodyScroll } from '@/hooks/use-lock-body-scroll'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClickMenu = () => setIsOpen((prevState) => !prevState)
  useLockBodyScroll(isOpen)
  return (
    <header className='fixed top-0 left-0 z-10 block max-h-14 w-full items-end bg-white'>
      <Container padding='minimal'>
        <Button
          className='relative z-50 ml-auto size-10 outline-none lg:hidden'
          onClick={handleClickMenu}
          size='custom'
        >
          <BurgerMenuBlock isOpen={isOpen} />
        </Button>
      </Container>
      <Navigation isOpen={isOpen} onClick={handleClickMenu} />
      {isOpen && (
        <div
          className='fixed inset-0 top-14 z-50 bg-black/50 lg:hidden'
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  )
}

export { Header }
