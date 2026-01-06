import type { Metadata } from 'next'
import { APPLICATION_NAME, BASE_URL, DESCRIPTION, TITLE } from '@/config/config'
import type { PropsMetadata } from '../shared/types/props/metadata'

export async function generateMetadata(
  props: PropsMetadata = {},
): Promise<Metadata> {
  const {
    title = TITLE,
    description = DESCRIPTION,
    domain = BASE_URL,
    og_description = DESCRIPTION,
    twitterHandle = TITLE,
    icons = '/images/dog.avif',
    images = '/images/dog.avif',
    siteName = APPLICATION_NAME,
    canonical = './',
  } = props

  const metadata: Metadata = {
    title: title,
    description: description,
    robots: 'index, follow',
    applicationName: siteName,
    appleWebApp: {
      title: siteName,
      capable: true,
      statusBarStyle: 'black-translucent',
    },
    metadataBase: new URL(domain),
    manifest: '/manifest.webmanifest',
    alternates: {
      canonical: canonical,
    },
    openGraph: {
      url: domain,
      images: images,
      siteName: siteName,
      title: title,
      description: description,
      type: 'website',
      locale: 'ru_RU',
    },
    twitter: {
      card: 'summary_large_image',
      site: domain,
      title: title,
      description: og_description,
      images: images,
      creator: twitterHandle,
    },
    icons: icons,
  }

  return metadata
}
