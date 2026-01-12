import { Container } from '@/ui/container/container'
import type { Props } from './block-with-description.props'
import { Title } from '@/ui/title/title'
import { Description } from '@/ui/description/description'
import { Paragraph } from '@/ui/paragraph/paragraph'

const BlockWithDescription = (props: Props) => {
  const { children, title, descriptionContent, titleLinks, linkToCode } = props

  return (
    <Container>
      {title && <Title text={title} />}
      {children}
      {descriptionContent && <Description description={descriptionContent} />}
      {titleLinks && (
        <Paragraph
          text={titleLinks}
          variant='a'
          color='link'
          type='medium'
          target='_blank'
          href={linkToCode}
        />
      )}
    </Container>
  )
}

export { BlockWithDescription }
