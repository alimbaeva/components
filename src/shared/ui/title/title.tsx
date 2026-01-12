import clsx from 'clsx'
import type { Props } from './title.props'

const STANDARD_TYPE = {
  medium: 'text-[32px] md:text-[48px] font-bold leading-[110%] tracking-tight',
  semibold:
    'text-[24px] md:text-[36px] font-bold leading-[115%] tracking-tight',
  normal: 'text-[20px] md:text-[28px] font-bold leading-[120%]',
  minimal: 'text-[18px] md:text-[22px] font-semibold leading-[120%]',
  custom: '',
}

const COLOR = {
  dark: 'text-neutral-100',
  light: 'text-neutral-800',
  custom: '',
}

const Title = (props: Props) => {
  const {
    text,
    variant = 'h2',
    type = 'semibold',
    color = 'dark',
    href,
    target,
    className,
    children,
  } = props

  const Variant = variant

  return (
    <Variant
      className={clsx(COLOR[color], STANDARD_TYPE[type], className)}
      href={href}
      target={target}
    >
      {text}
      {variant === 'a' && <span>{children}</span>}
    </Variant>
  )
}

export { Title }
