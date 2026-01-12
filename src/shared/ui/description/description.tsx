import clsx from 'clsx'
import DOMPurify from 'isomorphic-dompurify'
import { Title } from '../title/title'
import type { Props } from './description.props'

const Description = (props: Props) => {
  const { description, title, className, variant = 'div', id = 'about' } = props
  const Variant = variant

  if (!description) return null

  const cleanHtml = DOMPurify.sanitize(
    description.replace(/<p>(\s|&nbsp;)*<\/p>/gi, ''),
  )

  return (
    <Variant id={id} className={clsx('flex flex-col gap-6')}>
      {title && <Title text={title} />}
      <div
        className={clsx('prose prose-slate max-w-none', className)}
        dangerouslySetInnerHTML={{ __html: cleanHtml }}
      />
    </Variant>
  )
}

export { Description }
