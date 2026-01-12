const fullscreenCarouselMock = {
  title: 'Одиночный слайдер с внутренней навигацией',
  linkToCode:
    'https://github.com/alimbaeva/components/blob/main/src/widgets/slider/embla-carousel/fullscreen-carousel/fullscreen-carousel.tsx',
  descriptionContent: `
        <h3>Техническая архитектура и особенности слайдера</h3>
        <p>Компонент реализован с использованием <strong>Embla Carousel</strong> и оптимизирован под стандарты <strong>Next.js 16</strong>. Основные характеристики:</p>
        
        <ul>
            <li><strong>Конфигурация «Один слайд»:</strong> Свойство <code>flex-[0_0_100%]</code> гарантирует, что каждый слайд занимает ровно 100% ширины контейнера.</li>
            <li><strong>Бесшовная цикличность:</strong> Параметр <code>loop: true</code> обеспечивает бесконечную прокрутку в обе стороны.</li>
            <li><strong>Адаптивные пропорции:</strong> Использование <code>aspect-5/2</code> (или кастомных соотношений) позволяет контейнеру резервировать место на странице до загрузки изображений, предотвращая сдвиги верстки (CLS).</li>
        </ul>

        <h3>Критические моменты реализации (Critical points):</h3>
        <ul>
            <li><strong>Оптимизация LCP:</strong> Атрибут <code>priority={ind === 0}</code> заставляет браузер загружать первый слайд мгновенно, что критично для Core Web Vitals.</li>
            <li><strong>Flexbox хак <code>min-w-0</code>:</strong> Необходим для предотвращения «раздувания» слайдов под давлением внутреннего контента.</li>
            <li><strong>Умное заполнение <code>fill</code>:</strong> Использование Next.js Image с <code>object-cover</code> позволяет адаптировать картинку под любые пропорции без нарушения визуального соотношения сторон.</li>
            <li><strong>Интерактивность и навигация:</strong> Кнопки управления используют <code>backdrop-blur</code> и <code>transition</code> для мягкого визуального отклика, позиционированы абсолютно относительно <code>rounded-2xl</code> контейнера.</li>
        </ul>

        <h3>Безопасность и SEO:</h3>
        <ul>
            <li><strong>Доступность (A11y):</strong> Интерактивные элементы поддерживают стандартные атрибуты навигации, а структура семантически понятна поисковым роботам.</li>
        </ul>
    `,
}

const titleLinks = {
  gitHub: 'Смотреть код на GitHub',
}

export { fullscreenCarouselMock, titleLinks }
