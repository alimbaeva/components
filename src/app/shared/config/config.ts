const IS_DEV = process.env.NODE_ENV === 'development'
const TITLE = 'Компоненты на Next.js с использованием Tailwind CSS. Educational'
const DESCRIPTION =
  'Современных UI-компонентов на Next.js и Tailwind CSS. Educational'
const APPLICATION_NAME = 'Компоненты для Next.js'
const BASE_URL = IS_DEV
  ? 'http://localhost:3000/'
  : 'https://components-six-psi.vercel.app/'
const SITE = 'components-six-psi.vercel.app'
const TWITTER_HANDLE = '@components'

export { TITLE, DESCRIPTION, APPLICATION_NAME, BASE_URL, TWITTER_HANDLE, SITE }
