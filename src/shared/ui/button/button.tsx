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

const CUSTOM_PADDING = {
  2: 'p-2',
  4_2: 'px-4 py-2',
  custom: '',
}

const CUSTOM_SIZE = {
  w_full: 'w-full',
  h_full: 'h-full',
  circle_48: 'h-8 w-8 md:h-12 md:w-12',
  custom: '',
}

const CUSTOM_COLOR = {
  glass: 'bg-white/20',
  green: 'bg-positive-800',
  light_green: 'bg-positive-600',
  light_900: 'bg-positive-650/70',
  custom: '',
}

const CUSTOM_TEXT_COLOR = {
  white: 'text-white',
  custom: '',
}

const CUSTOM_ROUNDED = {
  xl_t: 'rounded-t-xl',
  xl_b: 'rounded-b-xl',
  xl_r: 'rounded-r-xl',
  xl_l: 'rounded-l-xl',
  full: 'rounded-full',
  xl: 'rounded-xl',
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
    padding = 'custom',
    variant = 'button',
    type = 'button',
    textColor = 'custom',
    disabled,
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
        CUSTOM_PADDING[padding],
        CUSTOM_TEXT_COLOR[textColor],
        'transition-all duration-200 group-hover:brightness-125 hover:brightness-125',
        disabled && 'pointer-events-none cursor-not-allowed opacity-50',
        className,
      )}
      onClick={onClick}
      disabled={disabled}
      href={href}
      target={target}
      type={type ?? 'button'}
    >
      {children}
    </Tag>
  )
}

export { Button }
