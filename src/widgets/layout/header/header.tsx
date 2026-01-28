'use client'

import { BurgerMenuBlock } from '@/ui/burger-menu-block/burger-menu-block'
import { Button } from '@/ui/button/button'
import { Container } from '@/ui/container/container'
import { useState } from 'react'
import { Navigation } from '../navigation/navigation'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClickMenu = () => setIsOpen((prevState) => !prevState)
  return (
    <header className='relative block max-h-14 lg:hidden'>
      <Container padding='minimal'>
        <Button
          className='relative z-50 ml-auto size-10 outline-none'
          onClick={handleClickMenu}
          size='custom'
        >
          <BurgerMenuBlock isOpen={isOpen} />
        </Button>
      </Container>
      {isOpen && (
        <Navigation className='absolute top-20 right-0 z-50 border-b lg:hidden' />
      )}
    </header>
  )
}

export { Header }
