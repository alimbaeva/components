import clsx from 'clsx'
import type { Props } from './paragraph.props'

const STANDARD_TYPE = {
  medium: 'text-[16px] md:text-[20px] font-bold leading-[120%]',
  semibold: 'text-[16px] md:text-[18px] font-semibold leading-[120%]',
  normal: 'text-[14px] md:text-[18px] font-normal leading-[120%]',
  minimal: 'text-[11px] md:text-[12px] leading-[100%]',
  custom: '',
}

const COLOR = {
  dark: 'text-neutral-100',
  light: 'text-neutral-800',
  link: 'text-secondary-700 hover:text-secondary-300',
  custom: '',
}

const Paragraph = (props: Props) => {
  const {
    text,
    type = 'normal',
    color = 'dark',
    variant = 'p',
    href,
    target,
    className,
  } = props

  const Variant = variant

  return (
    <Variant
      className={clsx(COLOR[color], STANDARD_TYPE[type], className)}
      href={href}
      target={target}
    >
      {text}
    </Variant>
  )
}

export { Paragraph }
