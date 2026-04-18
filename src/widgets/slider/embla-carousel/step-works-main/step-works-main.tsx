import { Container } from '@/ui/container/container'
import { HorizontalCarousel } from '@/ui/horizontal-carousel/horizontal-carousel'
import { AdvantageCard } from '@/widgets/cards/advantage-card/advantage-card'

export const WORK_STEPS_MOCK = [
  {
    index: 1,
    title: 'Консультация',
    description:
      'Выясняем ваши задачи, пожелания, стиль интерьера и условия помещения.',
  },
  {
    index: 2,
    title: 'Выезд специалиста',
    description:
      'Проводим осмотр пространства, измеряем уровень освещённости и подбираем подходящие зоны для размещения растений.',
  },
  {
    index: 3,
    title: 'Подбор концепции озеленения',
    description:
      'Формируем стиль, цветовые решения и подбираем растения, соответствующие интерьеру.',
  },
  {
    index: 4,
    title: 'Создание дизайн-проекта',
    description:
      'Готовим визуализации, схемы размещения и варианты кашпо, согласовываем с клиентом.',
  },
  {
    index: 5,
    title: 'Закупка растений и материалов',
    description:
      'Отбираем здоровые растения у проверенных поставщиков, подбираем кашпо, почвосмеси и декоративные элементы.',
  },
  {
    index: 6,
    title: 'Закупка растений и материалов',
    description:
      'Отбираем здоровые растения у проверенных поставщиков, подбираем кашпо, почвосмеси и декоративные элементы.',
  },
]

const WorkStepsMain = () => {
  return (
    <Container>
      <HorizontalCarousel
        isControlButton={false}
        isRight={true}
        title='Как мы работаем'
      >
        <div className='flex gap-4 md:gap-6'>
          {WORK_STEPS_MOCK.map((step) => (
            <div className='min-w-0 shrink-0' key={step.index}>
              <AdvantageCard
                className='min-h-72.5 w-70 md:min-h-75 md:w-[320px]'
                description={step.description}
                index={step.index}
                size='md'
                title={step.title}
              />
            </div>
          ))}
        </div>
      </HorizontalCarousel>
    </Container>
  )
}

export { WorkStepsMain }
