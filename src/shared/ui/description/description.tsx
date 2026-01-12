import clsx from 'clsx'
import DOMPurify from 'isomorphic-dompurify'
import { Title } from '../title/title'
import type { Props } from './description.props'

const CUSTOM_SIZE = {
  m: 'prose-p:text-lg prose-h3:text-3xl prose-li:text-lg',
  custom: 'prose prose-slate',
}

const Description = (props: Props) => {
  const {
    description,
    title,
    size = 'm',
    className,
    variant = 'div',
    id = 'about',
  } = props
  const Variant = variant

  if (!description) return null

  const cleanHtml = DOMPurify.sanitize(
    description.replace(/<p>(\s|&nbsp;)*<\/p>/gi, ''),
  )

  return (
    <Variant id={id} className={clsx('flex flex-col gap-6')}>
      {title && <Title text={title} />}
      <div
        className={clsx(
          'prose-p:text-lg prose-h3:text-3xl prose-li:text-lg flex max-w-none flex-col gap-6',
          CUSTOM_SIZE[size],
          className,
        )}
        dangerouslySetInnerHTML={{ __html: cleanHtml }}
      />
    </Variant>
  )
}

export { Description }
