import clsx from 'clsx'
import type { Props } from './container.props'

const PADDING_CUSTOM = {
  normal: 'px-4 py-5 md:py-8 md:px-8',
  custom: '',
}

const GAP_CUSTOM = {
  lg: 'gap-6 md:gap-10',
  md: 'gap-4 md:gap-8',
  custom: '',
}

const POSITION_CUSTOM = {
  row: 'flex flex-row',
  col: 'flex flex-col',
  custom: '',
}

const Container = (props: Props) => {
  const {
    variant = 'section',
    children,
    position = 'col',
    padding = 'normal',
    gap = 'md',
    className,
    id,
  } = props

  const Variant = variant

  return (
    <Variant
      id={id}
      className={clsx(
        'mx-auto w-full',
        PADDING_CUSTOM[padding],
        POSITION_CUSTOM[position],
        GAP_CUSTOM[gap],
        className,
      )}
    >
      {children}
    </Variant>
  )
}

export { Container }
