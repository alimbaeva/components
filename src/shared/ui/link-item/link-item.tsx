import clsx from 'clsx'
import Link from 'next/link'
import type { Props } from './link-item.props'

const LinkItem = (props: Props) => {
  const {
    link,
    label,
    isActive,
    onClick,
    isLeftElement = false,
    parentClassName,
    className,
    elementStyle,
  } = props

  return (
    <li className={clsx(parentClassName)}>
      <Link
        href={link}
        onClick={onClick}
        className={clsx('relative block', className)}
      >
        {isLeftElement && isActive && <span className={clsx(elementStyle)} />}
        {label}
      </Link>
    </li>
  )
}

export { LinkItem }
