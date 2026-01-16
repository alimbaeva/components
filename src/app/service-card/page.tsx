import { ServiceCard } from '@/widgets/cards/service-card/service-card'

const serviceCardData = {
  image: {
    src: '/images/moun-1.avif',
    alt: 'Озеленение офиса',
  },
  title: 'Озеленение офиса',
  description:
    'Живые и искусственные растения для рабочих и клиентских зон. Эстетика, комфорт и улучшение микроклимата.',
  price: '40 000 ₽',
  companiesCount: 142,
  logos: [
    {
      id: '1',
      src: '/images/logos/ag-logo.svg',
      alt: 'AG',
    },
    {
      id: '2',
      src: '/images/logos/green-logo.svg',
      alt: 'ЗЕЛЕНЫЙ',
    },
    {
      id: '3',
      src: '/images/logos/evergreen-logo.svg',
      alt: 'EverGreen',
    },
  ],
  buttonText: 'Все компании',
}

export default function ServiceCardPage() {
  return (
    <main className='flex min-h-screen items-center justify-center bg-neutral-900 p-4'>
      <ServiceCard
        image={serviceCardData.image}
        title={serviceCardData.title}
        description={serviceCardData.description}
        price={serviceCardData.price}
        companiesCount={serviceCardData.companiesCount}
        logos={serviceCardData.logos}
        buttonText={serviceCardData.buttonText}
      />
    </main>
  )
}
