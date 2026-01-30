import clsx from 'clsx'
import Link from 'next/link'
import type { Props } from './label-link.props'

const CUSTOM_BG_COLOR = {
  light_green: 'bg-teal-100 text-teal-900',
}

const BASE_STYLE = {
  base: 'rounded-sm px-2 py-1 text-sm',
}

const LabelLink = (props: Props) => {
  const { label, href, style = 'base', bg = 'light_green', className } = props

  if (href) {
    return (
      <Link
        href={href}
        className={clsx(
          BASE_STYLE[style],
          CUSTOM_BG_COLOR[bg],
          'transition-all duration-200 hover:brightness-108',
          className,
        )}
      >
        {label}
      </Link>
    )
  }

  return (
    <span className={clsx(BASE_STYLE[style], CUSTOM_BG_COLOR[bg], className)}>
      {label}
    </span>
  )
}

export { LabelLink }
