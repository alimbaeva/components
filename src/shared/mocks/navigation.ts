const navigationMock = [
  {
    label: 'Главная',
    link: './',
  },
  {
    label: 'Слайдер',
    link: '/slider',
    items: [
      {
        label: 'Одиночный слайдер',
        link: '#single_slider_embla_carousel',
      },
      {
        label: 'Лента карточек',
        link: '#card_feed_embla_carousel',
      },
      {
        label: 'Контролируемую реализацию',
        link: '#bounded_controlled_embla_carousel',
      },
      {
        label: 'Связанные слайдеры',
        link: '#related_sliders_embla_carousel',
      },
      {
        label: 'Групповой слайдер',
        link: '#group_sliders_embla_carousel',
      },
      {
        label: 'Бесконечый плавный слайдер',
        link: '#endless_smooth_slider_embla_carousel',
      },
    ],
  },
]

export { navigationMock }
