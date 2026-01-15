import clsx from 'clsx'
import type { Props } from './button.props'

const CUSTOM_BLUR = {
  sm: 'backdrop-blur-sm',
  custom: '',
}

const CUSTOM_GAP = {
  2: 'gap-2',
  custom: '',
}

const CUSTOM_SIZE = {
  circle_48: 'h-8 w-8 md:h-12 md:w-12',
  custom: '',
}

const CUSTOM_COLOR = {
  glass: 'bg-white/20 transition-colors hover:bg-white/40 transition-all',
  green: 'bg-positive-800 hover:bg-positive-800/40 transition-all',
  custom: '',
}

const CUSTOM_ROUNDED = {
  full: 'rounded-full',
  custom: '',
}

const Button = (props: Props) => {
  const {
    children,
    className,
    onClick,
    href,
    target,
    gap = 2,
    size = 'custom',
    blur = 'custom',
    color = 'custom',
    rounded = 'custom',
    variant = 'button',
    type = 'button',
  } = props

  const Tag = variant

  return (
    <Tag
      className={clsx(
        'flex cursor-pointer items-center justify-center whitespace-nowrap',
        CUSTOM_COLOR[color],
        CUSTOM_ROUNDED[rounded],
        CUSTOM_BLUR[blur],
        CUSTOM_GAP[gap],
        CUSTOM_SIZE[size],
        className,
      )}
      onClick={onClick}
      href={href}
      target={target}
      type={type ?? 'button'}
    >
      {children}
    </Tag>
  )
}

export { Button }
