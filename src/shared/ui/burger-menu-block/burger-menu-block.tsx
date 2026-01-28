import type { Props } from './burger-menu-block.props'

const BurgerMenuBlock = (props: Props) => {
  const { className = '', isOpen = false } = props

  return (
    <div className={`relative size-5 ${className}`}>
      <span
        className={`absolute left-0 h-0.5 w-5 rounded-full transition-all duration-300 ${
          isOpen
            ? 'bg-positive-900 top-1/2 -translate-y-1/2 rotate-45'
            : 'bg-positive-900 top-1 -translate-y-1/2 rotate-0'
        }`}
      />
      <span
        className={`bg-positive-900 absolute top-1/2 left-0 h-0.5 w-5 -translate-y-1/2 rounded-full transition-all duration-200 ${
          isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        }`}
      />
      <span
        className={`absolute left-0 h-0.5 w-5 rounded-full transition-all duration-300 ${
          isOpen
            ? 'bg-positive-900 top-1/2 -translate-y-1/2 -rotate-45'
            : 'bg-positive-900 bottom-1 translate-y-1/2 rotate-0'
        }`}
      />
    </div>
  )
}

export { BurgerMenuBlock }
